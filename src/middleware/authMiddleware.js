import jwt from 'jsonwebtoken';
import 'dotenv/config.js';
import User from '../models/user.model.js';

const authMiddleware = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({ message: 'Access not allowed' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId);

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Access not allowed' });
  }
};

export default authMiddleware;
