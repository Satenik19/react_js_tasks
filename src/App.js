import './App.css';
import React, {useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

function App() {

    const name = useSelector((state) => {
        return state.currentUser.name;
    });

    const dispatch = useDispatch();
    return (
        <div className="App">
            <h1>{name}</h1>
            <input type="text" value={name} onChange={(e) => {
                dispatch({
                    type: 'edit-current-user-name',
                    payload: {
                        name: e.target.value
                    }
                })
            }}/>
        </div>
    );
}

export default App;
