import './App.css';
import React, {useContext, useState} from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoFooter from './TodoFooter';


// 1. Create a new context with React.createContext and assign it to a context variable
// 2. Surround all teh components which need to use the values from context with <CreatedContextName.Provider></CreatedContextName.Provider>
// 3. Pass the value which we need to have in child components with value props
// 4. In the needed components use useContext(CreatedContextName) to have a value from context
function Test1() {
    return <div>
        <Test2 />
    </div>
}
function Test2() {
    return <div>
        <Test3 />
    </div>
}

function Test3() {
    const country = useContext(CountryContext);
    return <div>
        Hello {country}
    </div>
}

const CountryContext = React.createContext("Armenia");

function App() {
    return (
        <div className="App">
            <CountryContext.Provider value="Columbia">
                <Test1/>
            </CountryContext.Provider>
        </div>
    );
}

export default App;
