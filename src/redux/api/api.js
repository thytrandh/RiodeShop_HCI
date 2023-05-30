import axios from "axios";

const api = axios.create({
  baseURL: "https://onlineshophci.herokuapp.com",
});

export default api;
