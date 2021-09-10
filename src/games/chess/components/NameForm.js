import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionPlayer1, actionPlayer2 } from '../actions/index'; 

const NameForm = ({actionPlayer1, actionPlayer2})=>{
  const [player1, setPlayer1] = useState("")
  const [player2, setPlayer2] = useState("")

    const _NameChange = (event) => {
      setPlayer1(event.target.value);
    }
    const _NameChange2 = (event) => {
      setPlayer2(event.target.value);
    }
  
    const _NameSubmit = (event) =>  {
      alert('Names were submitted: Player 1 - ' + player1 + ' & Player 2 - ' + player2);
      event.preventDefault();
      actionPlayer1({name: player1});
      actionPlayer2({name: player2});
      // setPlayer1("")
      // setPlayer2("")
     

    }
  
      return (
        <form onSubmit={_NameSubmit}>
          <label>
          player1 Name: 
            <input type="text" value={player1} onChange={_NameChange} />
          </label>

          <label>
          player2 Name:
            <input type="text" value={player2} onChange={_NameChange2} />
          </label>

          <input method type="submit" value="Submit" />
        </form>
      );
  }

export default connect(null, {actionPlayer1, actionPlayer2}) (NameForm);