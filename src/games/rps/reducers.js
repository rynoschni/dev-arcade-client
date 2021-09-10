import { INCREMENT, DECREMENT, INCREASEMOVE } from "./actions";

const defaultState={
  count: 0,
  moves: 0
};

export function counter(state=defaultState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count+10,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count-15,
      };
    case INCREASEMOVE:
      return {
        ...state,
        moves: state.moves+1,
      };
    default:
      return state;
  }
};
