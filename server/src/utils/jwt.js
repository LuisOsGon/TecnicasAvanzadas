import jwt from 'jsonwebtoken';

class JsonWebToken {
  static sign(payload, options) {
    return jwt.sign(payload, process.env.JWT_SECRET, options);
  }

  static verify(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
  }

  static decode(token) {
    return jwt.decode(token);
  }

  static destroy(token) {
    return jwt.destroy(token);
  }
}

export default JsonWebToken;
