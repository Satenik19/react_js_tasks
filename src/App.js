import './App.css';
import React, {useEffect, useState} from 'react';
import useCoronaData from "./useCoronaData";

function App() {
    const [title, setTitle] = useState("");
    // const [data, setData] = useState();
    // UseEffect is calling only after rendering
    // If the second parameter is not empty, it's calling 1 time after mount, and every time when that parameter(s) change(s)
    // UseEffect returns a function before calling next function in it
    // UseEffect can't be inside if


    // useEffect(() => {
    //     console.log("UseEffect");
    //     // Debounce with setTimeout
    //     if (title.length === 2) {
    //         const handle = setTimeout(() => {
    //             fetch(`https://corona-api.com/countries/${title}`)
    //                 .then(stream => stream.json())
    //                 .then(results => setData(results.data))
    //         }, 1000);
    //
    //         return () => {
    //             clearTimeout(handle);
    //         }
    //     }
    // }, [title]);
    const data = useCoronaData(title);

    // useEffect(() => {
    //     console.log("UseEffect");
    //     fetch(`https://corona-api.com/countries`)
    //         .then(stream => stream.json())
    //         .then(results => setData(results.data))
    // }, []);

    let confirmed = "";
    let name = "";
    if (data !== undefined) {
        confirmed = data.latest_data.confirmed;
        name = data.name;
    }

    return (
        <div className="App">
            <input
                type="text"
                value={title}
                onChange={(e) => {
                setTitle(e.target.value)}}
            />
            <h1>{name} {confirmed}</h1>
        </div>
    );
}

export default App;
