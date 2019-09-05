import React, { useReducer } from 'react';
import Heat from './components/Heat';
import Bottle from './components/Bottle';
import './App.css';
import initialState from './state/initialState';
import rootReducer from './state/rootReducer';

function App() {

    const [state, dispatch] = useReducer(rootReducer, initialState);

    return (
        <div className="App">
            <h1>Hot Sauce</h1>
            <Bottle
                heatIndex={state.heatIndex}
            />
            <Heat
                heatIndex={state.heatIndex}
                dispatch={dispatch}
            />
        </div>
    );
}

export default App;
