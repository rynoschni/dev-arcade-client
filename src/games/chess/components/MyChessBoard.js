// import { Provider } from 'react-redux';
import ChessBoard from 'chessboardjsx';
import React, {useState, useEffect, useRef} from 'react';
import Chess from "chess.js"
import store from "../store";
import { Provider } from 'react-redux';

import NameForm from "./NameForm";






const container = {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "space-around",
    alightItem: "center"
}
function MyChessBoard() {
    const [fen, setFen] = useState("start");
    let game = useRef(null);
    const onDrop = ({sourceSquare,targetSquare}) => {
        let move = game.current.move({
            from: sourceSquare,
            to: targetSquare
        })
        if (move === null) return;
        setFen(game.current.fen())
        
    };
    
    useEffect(() =>{
        game.current = new Chess();
    },[])
    const resetGame = () => {
        // only restart it in chess.js
        game.current.clear();
        game.current.reset();
        // need to use the setFen so it restart it on the board
        setFen("start")
    }
    return (
    <Provider store={store}>
      <>
      {/* <scoreboard/> */}
        {
            game.current && game.current.game_over() ? <div style = {{textAlign: "center"}}><h1>Game Over</h1><button onClick = {resetGame} >Play Again</button></div>: <span></span> 
        }
<div className="MyChessBoard" style={container}>
<ChessBoard position={fen} 
onDrop = {onDrop}/>
</div>
<NameForm/>
    </>
    </Provider>
);
};





export default MyChessBoard;