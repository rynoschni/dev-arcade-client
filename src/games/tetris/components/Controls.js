import React from "react";
import  { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { moveDown, moveLeft, moveRight, rotate } from "../actions";

function useKey(key, cb) {
  const callbackRef = useRef(cb);
    useEffect(() => {
      callbackRef.current = cb;
    })
  useEffect(() => {
    function handle(event) {
        if(event.code === key) {
           callbackRef.current(event);
        }
    }
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [key]);
}

export default function Controls(props) {
  const dispatch = useDispatch();
  const isRunning = useSelector((state) => state.game.isRunning);
  const gameOver = useSelector((state) => state.game.gameOver);

  function handleEnter() {
    if (!isRunning || gameOver) {
      return;
    }
    dispatch(moveDown());
  }
    useKey("ArrowDown", handleEnter );
  
  function handleRight () {
    if (!isRunning || gameOver) {
      return;
    }
    dispatch(moveRight());
  }
    useKey("ArrowRight", handleRight );
  

    function handleLeft () {
      if (!isRunning || gameOver) {
        return;
      }
      dispatch(moveLeft());
    }
      useKey("ArrowLeft", handleLeft );

      function handleRotate () {
        if (!isRunning || gameOver) {
          return;
        }
        dispatch(rotate());
      }
        useKey("ArrowUp", handleRotate );
      
  
  
  return (
    <div className={`controls`}>
      {/* left */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          if (!isRunning || gameOver) {
            return;
          }
          dispatch(moveLeft());
        }}
      >
        Left
      </button>

      {/* right */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          if (!isRunning || gameOver) {
            return;
          }
          dispatch(moveRight());
        }}
      >
        Right
      </button>

      {/* rotate */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          if (!isRunning || gameOver) {
            return;
          }
          dispatch(rotate());
        }}
      >
        Rotate
      </button>

      {/* down */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          if (!isRunning || gameOver) {
            return;
          }
          dispatch(moveDown());
        }}
      >
        Down
      </button>
    </div>
  );
      
      }

