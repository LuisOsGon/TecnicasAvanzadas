import bcrypt from "bcryptjs";

const hash = (string) => {
    return bcrypt.hashSync(string, process.env.BCRYPT_SALT);
}

export default hash;