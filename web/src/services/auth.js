import RestClient from "./client";

const client = new RestClient({
  baseURL: "http://localhost:8000/api"
});

class AuthService {
  static async fetchUser(token) {
    return await client.get("/user", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  static async login({ email, password }) {
    return await client.post("/login", {
      email,
      password
    });
  }
}

export default AuthService;
