import React from 'react';
// THIS IS WHAT MAKES THE ACTION HAPPEN (LIKE A FOR SUBMIT OR GAME WON)
const Increment = props => (
  <div>
    <button onClick={props.handleClick}>+</button>
  </div>
);

export default Increment;