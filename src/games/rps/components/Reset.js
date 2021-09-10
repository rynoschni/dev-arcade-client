
import React from 'react';
import styled from 'styled-components';
import './Reset.css'

const ResetDiv=styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 200px;`




function Reset(props) {
    return(
       <ResetDiv>
        <div id="resetDiv">
            <button id="reset" onClick={props.onClick}>Reset</button>
        </div>
  </ResetDiv>

    )

}

export default Reset