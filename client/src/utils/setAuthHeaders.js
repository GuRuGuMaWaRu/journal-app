import axios from "axios";

export default token => {
  axios.defaults.headers.common["X-auth-token"] = token;
};
