import mongoose from 'mongoose';

const subscriptionSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Subscription name is required'],
      trim: true,
      minLength: 2,
      maxLength: 30,
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price must be greater than 0'],
    },
    currency: {
      type: String,
      enum: ['USD', 'INR'],
      default: 'INR',
    },
    frequency: {
      type: String,
      enum: ['daily', 'weekly', 'monthly', 'yearly'],
      required: true,
    },
    status: {
      type: String,
      enum: ['active', 'expired', 'cancelled'],
      default: 'active',
    },
    startDate: {
      type: Date,
      required: true,
      validate: {
        validator: (value) => value <= new Date(),
        message: 'Start date should be before present time',
      },
    },
    renewalDate: {
      type: Date,
      validate: {
        validator: function (value) {
          return value > this.startDate;
        },
        message: 'Renewal date must be after start date',
      },
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
  },
  { timestamps: true }
);

subscriptionSchema.pre('save', function (next) {
  if (!this.renewalDate) {
    const renewalPeriods = {
      daily: 1,
      weekly: 7,
      monthly: 30,
      yearly: 365,
    };
    this.renewalDate = new Date(this.startDate);
    this.renewalDate.setDate(
      this.renewalDate.getDate() + renewalPeriods[this.frequency]
    );
  }

  if (this.renewalDate < new Date()) {
    this.status = 'expired';
  }

  next();
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;
