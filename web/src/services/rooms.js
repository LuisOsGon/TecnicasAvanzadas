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

  static async fetchRoom(id) {
    return await client.get(`/rooms/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt")
      }
    });
  }

  static async fetchMessages(id) {
    return await client.get(`/rooms/${id}/messages`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt")
      }
    });
  }

  static async createRoom(room) {
    return await client.post("/rooms", room, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt")
      }
    });
  }

  static async fetchAvailableRooms() {
    return await client.get("/rooms/available", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt")
      }
    });
  }

  static async leaveRoom(id) {
    return await client.post(
      `/rooms/${id}/leave`,
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt")
        }
      }
    );
  }
}

export default RoomsService;
