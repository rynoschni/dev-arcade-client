import React from "react";
import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";
import Logo from "./components/Logo"
import { store } from "./store";
import { Provider } from "react-redux";
import './components/style.css'

function MemoryGame() {

  return (
    <Provider store={store}>
      <div id="memory-game">
        <Logo />
        <Board />
        <ScoreBoard />
      </div>
    </Provider>
  );
}

export default MemoryGame;
