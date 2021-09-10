import { createStore } from "redux";
import { counter } from "./reducers";
// Default state
// const defaultState = {
//   count: 0,
//   username: "test",
// };

export const store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
