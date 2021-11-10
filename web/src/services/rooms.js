import RestClient from "./client";

const client = new RestClient({
  baseURL: "http://localhost:8000/api"
});

class RoomsService {
  static async fetchRooms() {
    return await client.get("/rooms", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt")
      }
    });
  }
}

export default RoomsService;
