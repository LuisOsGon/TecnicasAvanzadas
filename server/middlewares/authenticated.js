import JsonWebToken from "../utils/jwt";

async function authenticated(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).json({
      message: 'Unauthorized'
    });
  }

  const [, token] = req.headers.authorization.split(' ');
  const { _id } = await JsonWebToken.verify(token);
  req.id = _id;
  next();
}

export default authenticated;
