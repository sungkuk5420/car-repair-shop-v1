import { T } from "./types";
import { ajaxActions } from "./ajaxActions";

export const actions = {
  [T.AJAX_ACTION]({ commit }, { data, cb }) {
    console.log(`store action [T.AJAX_ACTION] joinUser = ${data}`);
    ajaxActions.joinUser(
      data,
      results => {
        console.log(`action / AJAX_ACTION / success`);
        console.log(" reults=", results);
        if (cb) {
          cb(results);
        }
      },
      res => {
        console.log(`action / AJAX_ACTION / error`, res);
        commit(T.AJAX_ACTION);
      }
    );
  },
  [T.CHANGE_CENTER_TAB]({ commit }, data ) {
    console.log(`store CHANGE_CENTER_TAB [T.CHANGE_CENTER_TAB] data`);
    console.log(data);
    commit(T.CHANGE_CENTER_TAB, data);
  },
  [T.TYPES]({ commit }, { data }) {
    console.log(`store TYPES [T.TYPES] data`);
    console.log(data);
    commit(T.TYPES, data);
  }
};
