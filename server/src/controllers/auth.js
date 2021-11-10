import User from "../models/user";
import Hash from "../utils/hash";
import JsonWebToken from '../utils/jwt';

class AuthController {
    static async login(req, res) {
      console.log('**************************************************************************\n\n\n')
      console.log(req.body)
      console.log('\n\n\n**************************************************************************')
      const { email, password } = req.body;

      const user = await User.findOne({ email, password: await Hash.make(password)});

      if (!user) {
          return res.status(401).json({ message: 'Credenciales inválidas' });
      }

      const token = JsonWebToken.sign({ id: user._id });

      return res.status(200).json({ token });
    }

    static async register(req, res) {
        const { email, username, password } = req.body;

        try {
          const user = await User.create({ email, username, password: await Hash.make(password) });

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
