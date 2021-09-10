import React from "react";
import { useSelector } from "react-redux";

// Displays a message
export default function MessagePopup(props) {
  const isRunning = useSelector((state) => state.game.isRunning);
  const gameOver = useSelector((state) => state.game.gameOver);

  return (
    <>
      {isRunning === false? 
      <div className='message-popup'>
        <h1>Pause</h1>
      </div>
      :
      <> </>}
      {gameOver === true?
      <div className='message-popup'>
        <h1>Game Over</h1>
      </div>
      :
      <></>}
    </>
  );
}
