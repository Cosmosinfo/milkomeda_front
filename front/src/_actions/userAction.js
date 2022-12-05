// import { REGISTER_USER } from "./types";
// import { request } from "../utils/axios";

// const USER_URL = "/api/user";

// export function registerUser(dataToSubmit) {
//   const data = request("post", USER_URL + "/register", dataToSubmit);

//   return {
//     type: REGISTER_USER,
//     payload: data,
//   };
// }

import axios from "axios";
import { LOGIN_USER, REGISTER_USER } from "../_actions/types";

export function loginUser(dataToSubmit) {
  const request = axios.post("/api/users/login", dataToSubmit).then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function registerUser(dataToSubmit) {
  const request = axios.post("/api/users/register", dataToSubmit).then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}
