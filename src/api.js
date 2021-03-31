import axios from "axios";

export const apiUrl = "https://murmuring-tor-81614.herokuapp.com/";

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
