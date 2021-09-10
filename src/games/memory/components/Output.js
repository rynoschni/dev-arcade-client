import React from "react";
import UpdateUsername from "./UpdateUsername";

const Output = (props) => (
  <div className="score-output">
    <h1 id="username">Username: {props.username}</h1>
    <UpdateUsername />
    <h3 id="score">Wins: {props.amount}</h3>
  </div>
);

export default Output;
