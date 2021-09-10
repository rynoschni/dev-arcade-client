import { ADD_PLAYER, ADD_SCORE } from "./actionTypes";


const initialState = {
    name: '',
    score: 0
}

const playerReducer = (state=initialState, action) => {
    switch (action.type){
        
        case ADD_PLAYER: {
            
            const { name } = action.payload
            return { ...state, name };
        }
        case ADD_SCORE: {
            
            
            return {...state, score: state.score + 1};
        }
        default: 
            return state;
    }
}

window.playerReducer = playerReducer;

export default playerReducer;