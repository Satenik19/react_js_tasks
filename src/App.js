import './App.css';
import React, {useContext, useEffect, useState} from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoFooter from './TodoFooter';
import Example from "./Example";

// UseEffect with second parameter as empty array calls after mount
// UseEffect with second parameter as not empty array calls each time when the value in array changes
// UseEffect for mounted returns a function which calls before unmount
// UseEffect for update returns a function which calls each time before calling next function in UseEffect
function App() {
    const [isVisible, setIsVisible] = useState(true);
    return (
        <div className="App">
            Hello Armenia
            <button onClick={() => setIsVisible(!isVisible)}>click me</button>
            {
                isVisible ? <Example /> : null
            }
        </div>
    );
}

export default App;
