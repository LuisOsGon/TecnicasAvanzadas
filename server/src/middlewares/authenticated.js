import User from '../models/user';
import JsonWebToken from "../utils/jwt";

async function authenticated(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).json({
      message: 'Unauthorized'
    });
  }

  try {
    const [, token] = req.headers.authorization.split(' ');
    const { id } = await JsonWebToken.verify(token);

    if (!id) {
      return res.status(401).json({
        message: 'Unauthorized'
      });
    }

    req.user = await User.findById(id);

    if (!req.user) {
      return res.status(401).json({
        message: 'Unauthorized'
      });
    }
  } catch (error) {
    next(error);
  }

  next();
}

export default authenticated;
