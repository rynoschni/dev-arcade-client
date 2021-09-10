import {
	PLAYER1, PLAYER2,
} from '../actions';

const defaultState = {

	players: {
		player1:{
			name: "",
			score:0,
		},
		player2:{
			name: "",
			score:0,
		}
	}
};



// Reducer 
export function playerReducer(state=defaultState, action) {
	switch(action.type) {
		case PLAYER1: {
			const{name,score} = action.payload
			return {
				players: {
					...state.players,
					player1: {name,score}
				}
			};
		}
		case PLAYER2: {
			const{name,score} = action.payload
			return {
				players: {
					...state.players,
					player2: {name,score}
					}
				}
			}
        default:
            return state;
	}
}
