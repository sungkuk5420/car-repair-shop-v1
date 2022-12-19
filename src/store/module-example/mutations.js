import { T } from "./types";

export const mutations = {
  [T.CHANGE_CENTER_TAB] (state, data) {
    state.centerTab = data;
  },
  [T.LOGIN] (state, data) {
    console.log("mutations LOGIN", data)
    state.loginUser = data;
  }
};
