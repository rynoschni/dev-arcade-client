
import React from 'react';
import styled from 'styled-components';
import Player from "./Player";
import Reset from './Reset'
import { connect } from "react-redux";
import { actionIncrement, actionDecrement, actionIncreaseMove } from "../actions";
import "./GameWindow.css";
import Versus from "./Versus";
// import Countdown from './Countdown';


const actions=["rock", "paper", "scissors"];




const Board=styled.div`
display: ${props => props.display? props.display:'none'};
margin: auto;
width: 800px;
height: 500px;
border: 3px solid;
color: rgb(167, 105, 209);`

const Window=styled.div`
padding-top: 2rem;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
margin: auto;
width: 785px;
height: 450px;
border: 3px solid rgb(158, 83, 201);`

const Top=styled.div`
text-align: left;
padding: 1%;`




class GameWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            playerOne: actions[1],
            aiPlayer: actions[1],
            display: props.display

        };
    }

    selectAction=(selection) => {
        document.getElementById('pickObject').style.display='none'
        this.setState({
            playerOne: selection,
            aiPlayer: actions[Math.floor(Math.random()*actions.length)],
        });
        setTimeout(this.determineWinner, 1000);
    };

    determineWinner=() => {
        document.getElementById('resetDiv').style.display='flex'
        // this.countDown();
        document.getElementById("player_one").style.display="inline";
        document.getElementById("ai_player").style.display="inline";
        this.comparePlayers();
        this.addMoves();
    };

    comparePlayers=() => {
        const p1=this.state.playerOne;
        const ai=this.state.aiPlayer;
        if (p1==="rock"&&ai==="scissors") {
            this.props.increaseScore();
        } else if (p1==="scissors"&&ai==="rock") {
            this.props.decreaseScore();
        } else if (p1==="paper"&&ai==="rock") {
            this.props.increaseScore();
        } else if (p1==="rock"&&ai==="paper") {
            this.props.decreaseScore();
        } else if (p1==="scissors"&&ai==="paper") {
            this.props.increaseScore();
        } else if (p1==="paper"&&ai==="scissors") {
            this.props.decreaseScore();
        }
    };


    // countDown=() => {
    //     const Box=document.getElementById("countdownbox");
    //     let words=['ROCK', 'PAPER', 'SCISSORS'], i=0;
    //     function iterateWords() {
    //         i<words.length-1? i+=1:i=0;
    //         Box.innerHTML=words[i];
    //     }
    //     setInterval(iterateWords, 3000);
    // }
    addMoves=() => {
        this.props.increasemove();
    }

    resetClick=() => {
        document.getElementById('pickObject').style.display='block'
        document.getElementById("player_one").style.display="none";
        document.getElementById("ai_player").style.display="none";
        document.getElementById('resetDiv').style.display='none'
    }

    render() {
        const { playerOne, aiPlayer}=this.state;
        return (
          <Board display={this.props.display}>
            <div id="board">
              <Top>
                <div id="top">
                  <span>&nbsp;x&nbsp;</span>&nbsp;
                </div>
              </Top>

              <Window id="window">
                {/* <Countdown /> */}

                <Player id="player_one" actions={playerOne} />

                <Versus />
                <Player id="ai_player" actions={aiPlayer} />
                <div id="pickObject">
                  <button
                    className="action-btn-1"
                    onClick={() => this.selectAction("rock")}
                  >
                    <img
                      className="icon"
                      src="https://img.icons8.com/ios-glyphs/30/000000/rock.png"
                      alt=""
                    />
                    ROCK
                  </button>
                  &nbsp;
                  <button
                    className="action-btn-2"
                    onClick={() => this.selectAction("paper")}
                  >
                    <img
                      className="icon"
                      src="https://img.icons8.com/ios-glyphs/30/000000/paper.png"
                      alt=""
                    />
                    PAPER
                  </button>
                  &nbsp;
                  <button
                    className="action-btn-3"
                    onClick={() => this.selectAction("scissors")}
                  >
                    <img
                      className="icon"
                      src="https://img.icons8.com/ios-glyphs/30/000000/barber-scissors.png"
                      alt=""
                    />
                    SCISSORS
                  </button>
                </div>
                <Reset
                  onClick={() => {
                    this.resetClick();
                  }}
                />
              </Window>
            </div>
          </Board>
        );
    }
}

const mapStateToProps=(state) => {
    return {
        count: state.count,
        moves: state.moves
    };
};


function mapDispatchToProps(dispatch) {
    return {
        // Translate Redux dispatch into a React prop
        increaseScore: () => {
            dispatch(actionIncrement());
        }, decreaseScore: () => {
            dispatch(actionDecrement());
        }, increasemove: () => {
            dispatch(actionIncreaseMove());
        }
    };
}

// export default GameBoard;
export default connect(mapStateToProps, mapDispatchToProps)(GameWindow);
