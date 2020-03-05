import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000"
});

export const api = {
  async get(url) {
    const response = await axiosInstance.get(url);
    return response.data;
  },
  async post(url, body) {
    const response = await axiosInstance.post(url, body);
    return response.data;
  }
};
