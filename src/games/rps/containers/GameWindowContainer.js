import GameWindow from "../components/GameWindow";
import { connect } from "react-redux";

import { actionIncrement, actionDecrement, actionIncreaseMove } from '../actions';

function mapDispatchToProps(dispatch) {
  return {
    // Translate Redux dispatch into a React prop
    increaseScore: () => {
      dispatch(actionIncrement());

    }, decreaseScore: () => {
      dispatch(actionDecrement());

    },
    increaseMove: () => {
      dispatch(actionIncreaseMove());
    }
  };
}

export default connect(null, mapDispatchToProps)(GameWindow);
