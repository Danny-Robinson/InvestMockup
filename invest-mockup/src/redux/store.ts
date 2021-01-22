import { combineReducers, createStore } from "redux";

import { AppActions, CLEAR_STORE } from "../types";
import * as allReducers from "./reducers";

//this pattern is a bit unneccessary here
// but in a larger app youd have reducers across multiple files
const appReducer = combineReducers({
  ...allReducers,
});

export const rootReducer = (state: StoreState, action: AppActions) => {
  if (action.type === CLEAR_STORE) {
    state = undefined;
  }

  return appReducer(state, action);
};

export type StoreState = ReturnType<typeof appReducer> | undefined;
export const store = createStore(rootReducer);
