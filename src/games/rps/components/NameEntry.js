import React from 'react'
import styled from 'styled-components';

const PlayerEntry = styled.div`
    display: ${props => props.display ? props.display : 'none'};
    margin: auto;
    width: 100%;
    height: 50px;
    text-align: center;
    color: teal;
    padding-bottom: 20px;
    font-size: 1.5rem;
`

const PlayerEntryButton = styled.button`
    display: block;
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 100px;
    align-items: center;
    font-family: "DotGothic16", sans-serif;
    background: #7c7c7c;
    border-bottom: 6px inset rgba(0, 0, 0, 0.5);
    border-left: 6px inset rgba(0, 0, 0, 0.5);
    border-right: 6px inset rgba(255, 255, 255, 0.5);
    border-top: 6px inset rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
    color: cyan;
    cursor: pointer;
    display: block;
    font-size: 1.5rem;
    min-width: 200px;
    padding: 0.5rem;
    width: auto;
    background: #94167f;

    &:hover {
        background: #e93479;
    }
`

const PlayerEntryInput = styled.input`
    margin-top: 1rem;
`

function NameEntry(props) {

    return (
        <PlayerEntry display={props.playerEntryDisplay}>
            <label>Enter player name here:<br></br>
                <PlayerEntryInput type='text' id='playerName' onChange={props.handleChange} placeholder='Player name here...'/>
                <PlayerEntryButton id="submitButton" type='button' onClick={props.handleClick}>Submit Name</PlayerEntryButton>
            </label>
        </PlayerEntry>
    )
}

export default NameEntry