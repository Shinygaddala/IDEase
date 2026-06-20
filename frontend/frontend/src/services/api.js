import axios from "axios";

const api = axios.create({
  baseURL: "https://idease-7qsy.onrender.com",
});

export default api;