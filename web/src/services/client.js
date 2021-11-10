import axios from "axios";

class RestClient {
  constructor(config = {}) {
    this.restClient = axios.create(config);
  }

  sendRequest(method, endpoint, config, headers = {}) {
    return this.restClient[method](endpoint, config, headers);
  }

  get(endpoint, config = {}) {
    return this.sendRequest("get", endpoint, config);
  }

  post(endpoint, config = {}, headers = {}) {
    return this.sendRequest("post", endpoint, config, headers);
  }

  put(endpoint, config = {}) {
    return this.sendRequest("put", endpoint, config);
  }

  delete(endpoint, config) {
    return this.sendRequest("delete", endpoint, config);
  }

  patch(endpoint, config) {
    return this.sendRequest("patch", endpoint, config);
  }
}

export default RestClient;
