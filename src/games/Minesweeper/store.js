import { createStore } from 'redux';
import rootReducer from './reducers/playerReducer';


// const saveToLocalstorageMiddleware = store => next => action => {
// 	next(action);
  	
//   	if(action.type !== 'PUT_SCORE') return;
  	
//   	let topList = store.getState().scoreboard.scores;
//   	localStorage.setItem("scores", JSON.stringify(topList));
// }

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

export default store;