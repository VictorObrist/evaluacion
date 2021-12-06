import axios from "axios";

//axios.defaults.baseURL = process.env.BACKEND_API_URL;
const object = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default object;
