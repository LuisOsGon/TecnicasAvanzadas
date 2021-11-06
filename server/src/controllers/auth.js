import User from "../models/user";
import Hash from "../utils/hash";
import JsonWebToken from '../utils/jwt';

class AuthController {
    static async login(req, res) {
      const { email, password } = req.body;

      const user = await User.findOne({ email});

      if (!user || ! await Hash.compare(password, user.password)) {
          return res.status(401).json({ message: 'Credenciales inválidas' });
      }

      const token = JsonWebToken.sign({ id: user._id });

      return res.status(200).json({ token });
    }

    static async register(req, res) {
        const { email, password } = req.body;

        try {
          const user = await User.create({ email, password: await Hash.make(password) });

          const token = await JsonWebToken.sign({ id: user._id });

          return res.status(201).json({ token });
        } catch (error) {
          console.warn(error);
          return res.status(400).json({ message: 'Usuario ya existe' });
        }
    }

    static async logout(req, res) {
      JsonWebToken.destroy(req.headers.authorization);
      return res.status(204).json();
    }
}

export default AuthController;
