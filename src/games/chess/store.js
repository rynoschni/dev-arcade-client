import { createStore } from 'redux';

import { playerReducer } from './reducers';

const store = createStore(playerReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store


