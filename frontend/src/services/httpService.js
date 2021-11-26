import axios from "axios";

//axios.defaults.baseURL = process.env.BACKEND_API_URL;

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
