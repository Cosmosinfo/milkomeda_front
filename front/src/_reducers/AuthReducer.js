import { SET_TOKEN } from "../_actions/types";

export const setToken = (token) => ({
  type: SET_TOKEN,
  token,
});

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};
