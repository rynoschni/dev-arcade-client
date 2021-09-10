import React from 'react';
import { connect,useSelector } from 'react-redux';
import scoreActions from '../actions/scoreActions';


 function ScoreBoard(props) {
    
    const score = useSelector((state) => state.score);

    return (
        <div className="score-board">
            <div>
                <h1 style={{color: "#FAEB2C", fontFamily: "primary-font", fontSize: "40px"}}>
                        Score:{ score } 
                </h1>
            </div>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        // propName in React : a fn that calls dispatch
        handleClick: () => {
            dispatch(scoreActions());
        }
    }
}

export default connect(null, mapDispatchToProps)(ScoreBoard);