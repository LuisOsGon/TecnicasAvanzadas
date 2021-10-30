import User from "../models/user";
import JsonWebToken from '../utils/jwt';

class AuthController {
    static async login(req, res) {
      const { email, password } = req.body;

      const user = await User.findOne({ email});

      if (!user || !user.validatePassword(password)) {
          return res.status(401).json({ message: 'Credenciales inválidas' });
      }

      const token = JsonWebToken.sign({ id: user._id });

      return res.status(200).json({ token });
    }

    static async register(req, res) {
        const { email, password } = req.body;

        try {
          console.log('**************************************************************************\n\n\n')
          console.log(email, password)
          console.log('\n\n\n**************************************************************************')
            const user = await User.create({ email, password });
            console.log('**************************************************************************\n\n\n')
            console.log(user)
            console.log('\n\n\n**************************************************************************')
            const token = JsonWebToken.sign({ id: user._id });

            return res.status(201).json({token});
        } catch (error) {
          console.log('**************************************************************************\n\n\n')
          console.log(error)
          console.log('\n\n\n**************************************************************************')
            return res.status(400).json({ message: 'Usuario ya existe' });
        }
    }

    static async logout(req, res) {
      JsonWebToken.destroy(req.headers.authorization);
      return res.status(204).json();
    }
}

export default AuthController;
