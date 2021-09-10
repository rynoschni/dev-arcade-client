import React,{useState,useEffect} from 'react';
import CreateBoard from '../utils/CreateBoard';
import { revealed } from "../utils/Reveal";
import Cell from './Cell';
import { toast,ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import scoreActions from '../actions/scoreActions';
import 'react-toastify/dist/ReactToastify.css';
function Board(props) {
    const [grid,setGrid]=useState([]);
    const [nonMinecount,setNonMinecount]=useState(0);
    const [mineLocation,setmineLocation]=useState([]);
    // const score = useSelector((state) => state.score);
    

    const style={
        display : 'flex',
        flexDirection : 'row',
        width:'fit-content',
        color:'white',
        
    }

    

    useEffect(()=>{
        
        freshBoard();
    },[]);

    // Making freshboard at start
    const freshBoard = () => {
        const newBoard=CreateBoard(6,6,1);
        setNonMinecount(6*6-1);
        setmineLocation(newBoard.mineLocation);
        setGrid(newBoard.board);
    }
    const updateFlag=(e,x,y)=>{
        e.preventDefault();
        // deep copy of the object
        let newGrid=JSON.parse(JSON.stringify(grid));
        newGrid[x][y].flagged=true;
        setGrid(newGrid);
    }
    const newfresh=()=>{
        freshBoard();
    }
    const revealcell=(x,y)=>{
        let newGrid=JSON.parse(JSON.stringify(grid));
        if(newGrid[x][y].value==="X"){
            toast.dark(' Clicked on Mine ,Try Again', { position: "top-center", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
            for(let i=0;i<mineLocation.length;i++){
                newGrid[mineLocation[i][0]][mineLocation[i][1]].revealed=true;
            }
            setGrid(newGrid);
            setTimeout(newfresh,3000);
        }
        if(nonMinecount===0){
            props.handleClick();
            toast.success('Wohoo!!,You won',{ position: "top-center", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
            setTimeout(newfresh,3000);
        }
        else{
            let revealedboard=revealed(newGrid,x,y,nonMinecount);
            setGrid(revealedboard.arr);
            setNonMinecount(revealedboard.newNonMines);
        }
        
    }
    
    return (
        <div className="parent">
            <div>
        
                <h3 style={{textAlign:'center',margin:'0px', paddingBottom: '15px', color: '#FAEB2C', fontFamily: 'primary-font', fontSize: '40px'}}>Non-Mines - {nonMinecount}</h3>
                <ToastContainer>
                </ToastContainer>
                {grid.map((singlerow,index1)=>{
                    return (
                        <div style={style} key={index1}>
                            {singlerow.map((singlecol,index2)=>{
                            return  <Cell details={singlecol} key={index2} updateFlag={updateFlag} revealcell={revealcell}/>
                            })}
                            
                        </div>
                    )
                })}
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

export default connect(null, mapDispatchToProps)(Board);

