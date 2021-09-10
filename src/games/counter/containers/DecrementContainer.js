import React from 'react';
import { connect } from 'react-redux';
import { actionDecrement } from '../actions';

const Decrement = props => <button onClick={props.handleClick}>-</button>;

function mapDispatchToProps(dispatch) {
  return {
    handleClick: () => {
      dispatch(actionDecrement());
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Decrement);
