import React from 'react';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import { createMuiTheme } from '@material-ui/core';
// import { ThemeProvider } from 'styled-components';



export default function SimpleAccordion() {
  

  return (
   
    <div >
      <Accordion style= {{width: "30%", margin: "auto", color: "#3D144C", marginTop: "20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style= {{backgroundColor: "#1685F8", fontFamily: "primary-font", textAlign: "center" }}
          
        >
          <Typography >How to Play the Game</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: "#FAEB2C"}}>
          <Typography >
            Click on any square to begin.
            The numbers on the squares indicates the number of mines surrounding that square. Using that information, you will then try to identify where the mines are hidden. You can right click to mark the cell with a flag.
            If you are able to navigate the board without setting off any mines...<br></br>
            YOU WIN!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    
  );
}