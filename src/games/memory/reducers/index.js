import { INCREMENT, DECREMENT, UPDATE } from "../actions";

const defaultState = {
  count: 0,
  username: "",
};

// Reducer
export function counter(state = defaultState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
        username: state.username,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    case UPDATE:
      const { name } = action.payload;
      return {
        count: state.count,
        username: name,
      };
    default:
      return state;
  }
}
