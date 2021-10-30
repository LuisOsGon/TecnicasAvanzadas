import bcrypt from "bcryptjs";

class Hash {
  static async make(password) {
    return await bcrypt.hash(password, process.env.BCRYPT_SALT);
  }

  static async compare(password, hash) {
    return await bcrypt.compare(password, hash);
  }
}

export default Hash;
