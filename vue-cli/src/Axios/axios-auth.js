// custom axios
import axios from "axios";

const instance = axios.create({
  baseURL: "https://axios-2ae55.firebaseio.com"
});
instance.defaults.headers.common["Something"] = "something";
export default instance;
