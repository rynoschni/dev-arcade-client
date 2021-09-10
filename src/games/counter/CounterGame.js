import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

import Output from './containers/OutputContainer';
import Increment from './containers/IncrementContainer';
import Decrement from './containers/DecrementContainer';
//import ReduxGame from '../../../src/components/ReduxGame'

const CounterGame = props => (
    <Provider store={store}>
        <div>
            <h1>The Most Amazing Counter App Ever</h1>
            <Output />
            <Increment />
            <Decrement />
            
        </div>
    </Provider>
);

export default CounterGame;