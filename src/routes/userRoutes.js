import { Router } from 'express';
import { getUser, getUsers } from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', authMiddleware, getUser);

userRouter.post('/', (req, res) =>
  res.send({
    message: 'create the user',
  })
);

userRouter.put('/:id', (req, res) =>
  res.send({
    message: 'update the user',
  })
);

userRouter.delete('/:id', (req, res) =>
  res.send({
    message: 'Delete the user',
  })
);

export default userRouter;
