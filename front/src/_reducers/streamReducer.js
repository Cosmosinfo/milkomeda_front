import _ from "lodash";
import { FETCH_STREAMS, FETCH_STREAM } from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
}
