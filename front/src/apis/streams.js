import axios from "axios";

export default axios.create({
  baseURL: "http://54.215.251.144:8080/api/stage/liveList",
});
