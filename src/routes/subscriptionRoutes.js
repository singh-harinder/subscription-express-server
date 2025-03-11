import { Router } from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import {
  createSubscription,
  getUserSubscriptions,
} from '../controllers/subsciptionController.js';

const subscriptionRouter = Router();

subscriptionRouter.post('/', authMiddleware, createSubscription);

subscriptionRouter.get('/user/:id', authMiddleware, getUserSubscriptions);

export default subscriptionRouter;
