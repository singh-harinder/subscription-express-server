import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', (req, res) =>
  res.send({
    message: 'Get list of all the users',
  })
);

userRouter.get('/:id', (req, res) =>
  res.send({
    message: 'Get details of a particular user',
  })
);

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
