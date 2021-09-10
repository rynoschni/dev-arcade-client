import { createStore } from "redux";
import { counter } from "./reducers";

// const defaultState={
//   count: 0,
//   moves: 0
// };

export const store=createStore(counter, window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());
