import {
	INCREMENT,
	DECREMENT,
	ADDSCORE
} from '../actions';

// Reducer 
export function counter(state, action) {
	switch(action.type) {
		case INCREMENT:
			return {
				count: state.count + 1
			}
		case DECREMENT:
			return {
				count: state.count - 1
			}
        default:
            return state;
	}
}

export function addScore(state, action) {
	switch(action.type) {
		case ADDSCORE: 
			return {
				credentials: state.credentials.push(action.payload)
			}
		default:
			return state;
	}
}

// const initialState = {
// 	credentials: []
// }

// const reducer = (state = initialState, action) => {
// 	switch(action.type) {
// 		case 'ADDSCORE': {
// 			return {
// 				...state,
// 				credentials: action.payload
// 			}
// 		}
// 	}
// 	return state;
// }
