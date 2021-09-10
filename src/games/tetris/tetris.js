import React from "react";

import { Provider} from "react-redux";
import store from './store'
import "./tetris.css";
import title from './images/tetris.png'

import GridBoard from "./components/GridBoard";
import NextBlock from "./components/NextBlock";
import ScoreBoard from "./components/ScoreBoard";
import Controls from "./components/Controls";
import MessagePopup from "./components/MessagePopup";
import Form from "./components/Form";


function Tetris() {

  
  return (
    
    <Provider store={store}>
      <div className="Tetris">
        <header className="tetris-header">
          <h1 className="tetris-title">TETRIS</h1>
        </header>
        
        <Form />
        <GridBoard />
        <NextBlock />
        <ScoreBoard />
        <Controls />
        <MessagePopup />
        
      </div>
    </Provider>
  );
}

export default Tetris;
