import Subscription from '../models/subscription.model.js';

export const createSubscription = async (req, res, next) => {
  try {
    const subsciption = await Subscription.create({
      ...req.body,
      user: req.user._id,
    });

    return res.status(201).json({ success: true, data: subsciption });
  } catch (error) {
    next(error);
  }
};

export const getUserSubscriptions = async (req, res, next) => {
  try {
    if (req.user.id == req.params.id) {
      const userSubscriptions = await Subscription.find({
        user: req.params.id,
      });
      return res.status(200).json({ success: true, data: userSubscriptions });
    }

    const error = new Error('Unauthorized Access');
    error.status = 401;
    throw error;
  } catch (error) {
    next(error);
  }
};
