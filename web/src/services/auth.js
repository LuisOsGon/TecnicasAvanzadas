import RestClient from './client';

const client = new RestClient({
  baseURL: 'http://localhost:8000/api',
});

class AuthService {
  static async fetchUser(token) {
    const response = await client.get('/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  }
}

export default AuthService;