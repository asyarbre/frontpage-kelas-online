import axios from "axios";
import errorHandler from "./errorHandler";

const api = process.env.NEXT_PUBLIC_API_HOST;

const instance = axios.create({
  baseURL: api,
  timeout: 1000,
});

instance.interceptors.response.use((response) => response.data, errorHandler);

export default instance;
