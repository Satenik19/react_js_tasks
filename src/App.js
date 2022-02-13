import './App.css';
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editName, selectName } from './features/currentUser/currentUserSlice';

// Every reducer should have as first argument only the state which it needs to check and change
// Store contains the state, reducers and middlewares
// CreateStore has 2 parameters, the first function is the reducer function, which tells what action should handle what reducer,
// the second parameter is initial state
// The first parameter can be combineReducers function where in object we should say which data handles which reducer (pass reducer name)
// For every data in state we should have separate js file where we have all functions related to that data (action creators, data getters etc.)

function App() {
    const name = useSelector(selectName);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <h1>{name}</h1>
            <input type="text" value={name} onChange={(e) => {
                dispatch(editName(e.target.value))
            }}/>
        </div>
    );
}

export default App;
