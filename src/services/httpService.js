import axios from "axios";
import { toast } from "react-toastify";
// import auth from "./authService";
import logger from "./logService";
// import * as Sentry from "@sentry/react";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  // Unexpected errors (network down, server down, db down, bug)
  // - Log them
  // - Display generic and friendly error message to user

  if (!expectedError) {
    toast.error("An unexpected error occurred");
    logger.log(error);
    // toast("An unexpected error occurred");
    // logger.log(error);
  }
  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
