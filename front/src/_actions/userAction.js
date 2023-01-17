import axios from "axios";
import { LOGIN_USER, REGISTER_USER, FETCH_STREAM, FETCH_STREAMS } from "../_actions/types";
import streams from "../apis/streams";

export function loginUser(dataToSubmit) {
  const request = axios
    .post("http://118.63.182.3:8880/api/user/login", dataToSubmit)
    .then((response) => console.log("response", response.data));

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function registerUser(dataToSubmit) {
  const request = axios.post("http://52.53.207.20:8080/api/user/join", dataToSubmit).then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export const fetchStreams = () => async (dispatch) => {
  console.log("asdasd");
  const response = await streams.get("/streams");
  console.log("res", response);

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);
  console.log("res", response);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};
