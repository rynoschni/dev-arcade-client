import { connect } from "react-redux";
import Board from "../components/Board";

import { actionIncrement } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    // propName in React : a fn that calls dispatch
    handleClick: () => {
      dispatch(actionIncrement());
    },
  };
}

export default connect(null, mapDispatchToProps)(Board);
