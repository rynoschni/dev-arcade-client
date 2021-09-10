import React, { useEffect, useState, useRef } from "react";
import Card from "./Card";
// import styled from "styled-components";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  DialogTitle,
} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import './style.css';

import { actionIncrement } from "../actions";

function Board(props) {
  // const Grid = styled.div`
  //   display: "grid";
  //   font-family: "Courier New", Courier, monospace;
  // `;
  const possibleCardFaces = [
    "😋",
    "😋",
    "😎",
    "😎",
    "😐",
    "😐",
    "😘",
    "😘",
    "😍",
    "😍",
    "😂",
    "😂",
  ];

  const shuffle = (array = []) => {
    let randIndex;
    for (
      let currentIndex = array.length - 1;
      currentIndex > 0;
      currentIndex--
    ) {
      randIndex = Math.floor(Math.random() * (currentIndex + 1));
      [array[currentIndex], array[randIndex]] = [
        array[randIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  const [shuffledCards, setShuffledCards] = useState(
    shuffle(possibleCardFaces)
  ); // initialize state
  const [selectedCards, setSelectedCards] = useState([]); //track flipped cards
  const [clearedCards, setClearedCards] = useState({}); // track matched cards
  const [moves, setMoves] = useState(0); // track player moves
  const [showGameOver, setShowGameOver] = useState(false);
  const [bestScore, setBestScore] = useState(
    JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
  );

  const timeout = useRef(null);

  //check if cards match
  const evaluate = () => {
    const [first, second] = selectedCards;
    if (shuffledCards[first] === shuffledCards[second]) {
      setClearedCards((prev) => ({ ...prev, [shuffledCards[first]]: true }));
      setSelectedCards([]);
      return;
    }
    timeout.current = setTimeout(() => {
      setSelectedCards([]);
    }, 400);
  };

  

  function handleClick(index) {
    // have max of 2 selected cards
    if (selectedCards.length === 1) {
      setSelectedCards((prev) => [...prev, index]);
      //increase moves by one after flipping 2
      setMoves((moves) => moves + 1);
    } else {
      clearTimeout(timeout.current);
      setSelectedCards([index]);
    }
  }

  useEffect(() => {
    if (selectedCards.length === 2) {
      setTimeout(evaluate, 400);
    }
    
  }, [selectedCards]);

  const checkIsFlipped = (index) => {
    return selectedCards.includes(index);
  };

  const checkIsCleared = (face) => {
    return Boolean(clearedCards[face]);
  };

  const checkCompletion = () => {
    // We are storing clearedCards as an object since its more efficient to search in an object instead of an array
    if (Object.keys(clearedCards).length === possibleCardFaces.length / 2) {
      props.handleClick();
      setShowGameOver(true);
      const highScore = Math.min(moves, bestScore);
      setBestScore(highScore);
      localStorage.setItem("bestScore", highScore);
    }
  };

  useEffect(() => {
    checkCompletion();
  }, [clearedCards]);

  const handleRestart = () => {
    setClearedCards({});
    setSelectedCards([]);
    setShowGameOver(false);
    setMoves(0);
    setShuffledCards(shuffle(possibleCardFaces));
  };

  // restart button style
  const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 40,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      marginTop: '40px'
    },
    label: {
      textTransform: 'capitalize',
      fontSize: 'large'
    },
  })(Button);

  return (
    <div>
      <div className="memo-grid">
        {shuffledCards.map((face, index) => {
          return (
            <Card
              key={`${face}-${index}`}
              id={index}
              face={face}
              index={index}
              onClick={handleClick}
              isClicked={checkIsFlipped(index)}
              isCleared={checkIsCleared(face)}
            />
          );
        })}
      </div>
      <StyledButton onClick={handleRestart}>
        RESTART
      </StyledButton>
      <Dialog
        open={showGameOver}
        disableBackdropClick
        disableEscapeKeyDown
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Hurray!!! You completed the challenge
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You completed the game in {moves} moves. Your best score is{" "}
            {bestScore} moves.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRestart} color="primary">
            Restart
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    // propName in React : a fn that calls dispatch
    handleClick: () => {
      dispatch(actionIncrement());
    },
  };
}

export default connect(null, mapDispatchToProps)(Board);
