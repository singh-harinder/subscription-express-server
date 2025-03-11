import aj from '../config/arcjet.js';

const arcjetMiddleware = async (req, res, next) => {
  try {
    const decision = await aj.protect(req, { requested: 1 });

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit() || decision.reason.isBot()) {
        return res.status(429).json({ message: 'Too many requests' });
      }

      return res.status(403).json({ message: 'Access Denied' });
    }
    next();
  } catch (error) {
    next(error);
  }
};

export default arcjetMiddleware;
