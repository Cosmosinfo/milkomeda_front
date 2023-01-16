import axios from "axios";

export default axios.create({
  baseURL: "http://52.53.207.20:8080/api/stage/liveList",
});
