import axios from "axios";
// export const API_SERVER = "http://192.168.1.101:8000/api";
// export const API_SERVER = "https://api.farazsmspanel.com/api";
export const API_SERVER = "http://127.0.0.1:8000/api";

axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

const user = JSON.parse(localStorage.getItem("user"));
if (user && user.access_token) {
  axios.defaults.headers.post["Authorization"] = `Bearer ${user.access_token}`;
}

export const server = axios.create({
  baseURL: API_SERVER,
});
