import express from 'express';
import 'dotenv/config.js';
import authRouter from './routes/authRoutes.js';
import subscriptionRouter from './routes/subscriptionRoutes.js';
import userRouter from './routes/userRoutes.js';
import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middleware/errorMiddleware.js';
import cookieParser from 'cookie-parser';

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(errorMiddleware);

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subsciptions', subscriptionRouter);

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  await connectToDatabase();
});

export default app;
