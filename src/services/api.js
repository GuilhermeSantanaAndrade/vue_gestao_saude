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
  },
  async put(url, body) {
    const response = await axiosInstance.put(url, body);
    return response.data;
  },
  async delete(url, id) {
    const response = await axiosInstance.delete(url + "/" + id);
    return response.data;
  }
};
