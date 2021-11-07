import RestClient from "./client";

const client = new RestClient({
  baseURL: "http://localhost:8000/api",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("jwt")
  }
});

class RoomsService {
  static async fetchRooms() {
    return await client.get("/rooms");
  }
}

export default RoomsService;
