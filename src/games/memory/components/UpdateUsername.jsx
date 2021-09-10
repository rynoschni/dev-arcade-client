import { React, useState } from "react";
import { connect } from "react-redux";
import { actionUpdateUsername } from "../actions";

const UpdateUsername = ({ actionUpdateUsername }) => {
  const [userName, setUserName] = useState("");
  const _handleUserName = (input) => {
    setUserName(input);
  };

  const _handleSubmit = (e) => {
    e.preventDefault();
    actionUpdateUsername({ name: userName });
    setUserName("");
  };

  return (
    <div>
      <form onSubmit={(e) => _handleSubmit(e)}>
        <input
          name="username-input"
          type="text"
          placeholder="Please give a Username"
          onChange={(e) => _handleUserName(e.target.value)}
          value={userName}
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default connect(null, { actionUpdateUsername })(UpdateUsername);
