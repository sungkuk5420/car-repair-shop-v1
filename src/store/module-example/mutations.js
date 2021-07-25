import { T } from "./types";

export const mutations = {
  [T.CHANGE_CENTER_TAB](state, data) {
    state.centerTab = data;
  }
};
