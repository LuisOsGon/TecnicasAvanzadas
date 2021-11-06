class UserController {
    static show(req, res) {
      // Excluir algunos datos del usuario
      const { __v, password, ...user } = req.user.toJSON();

      return res.json({
        user
      })
    }
}

export default UserController;
