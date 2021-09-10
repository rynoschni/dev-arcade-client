import React from 'react';
import Board from './components/board';
import SignupForm from './components/SignupForm';
import ScoreBoard from './components/ScoreBoard';
import Instructions from './components/Instructions';
import '../Minesweeper/css/Minesweeper.css';
import background from "../Minesweeper/css/images/pink-city.jpeg";
import { Provider } from 'react-redux';
import store from './store';



function MinesweeperGame() {
  return (
    <Provider store={store}>
    <div className="MinesweeperBody">
      <div style={{backgroundImage: `url(${background})`}}></div>
        
      
      <div className="MinesweeperHeading"> 
      <h1 style={{color: "#FAEB2C",fontFamily: "primary-font", fontSize: "100px"}}>MineSweeper</h1>
     <SignupForm /> 
      <Instructions/>
      </div>
      <div className="timer">
      <ScoreBoard/>
      </div>
      <div className="aligned">   
        <Board/>
        
      </div>
    </div>
    </Provider>
  );
}


export default MinesweeperGame;
