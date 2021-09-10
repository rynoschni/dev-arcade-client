import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { pause, resume, restart } from "../actions";

export default function ScoreBoard(props) {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  const { name, score, isRunning, gameOver } = game;

  return (
    <div className="score-board">
      <div>Name: {name}</div>
      <br />
      <div>Score: {score}</div>
      <br />
      <button
        className="score-board-button"
        onClick={(e) => {
          if (gameOver) {
            return;
          }
          if (isRunning) {
            dispatch(pause());
          } else {
            dispatch(resume());
          }
        }}
      >
        {isRunning ? "Pause" : "Play"}
      </button>
      <br />
      <button
        className="score-board-button"
        onClick={(e) => {
          dispatch(restart());
        }}
      >
        Restart
      </button>
    </div>
  );
}
