import React from 'react';
import './style.css';

function Card(props) {

    function handleClick() {
        if (props.isClicked !== true) {
            props.onClick(props.index)
        }
    }

    return (
        <div className={`memo-card-container ${props.isClicked ? "memo-clicked" : ""} ${props.isCleared ? "memo-hidden" : ""}`} onClick={handleClick}>
            <h1 className={`memo-card-face ${props.isClicked ? "" : "memo-hidden"} ${props.isCleared ? "memo-hidden" : ""}`} name={props.face}>{props.face}</h1>
        </div>
    )
}


export default Card;