function guest(req, res, next) {
    if (req.headers.authorization) {
      return res.status(403).json({ message: 'Ya está logueado' });
    }
    next();
}

export default guest;
