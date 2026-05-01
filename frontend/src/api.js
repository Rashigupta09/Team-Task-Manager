import axios from "axios";

const api = axios.create({
  baseURL: "https://team-task-manager-9yrc.onrender.com/api",
});

export default api;
