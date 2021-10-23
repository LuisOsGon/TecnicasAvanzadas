import hash from "../utils/hash";
import User from "../models/user";

class AuthController {
    static async login(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ email, password: hash(password)});

        if (!user) {
            return res.status(401).json();
        }

        // TODO: Auth

        return res.status(200).json();
    }

    static async register(req, res) {
        const { email, password } = req.body;

        const user = new User({ email, password: hash(password)});
        await user.save();

        // TODO: Auth

        return res.status(201).json(user);
    }

    static async logout(req, res) {
        // TODO: Logout
    }
}

export default AuthController;