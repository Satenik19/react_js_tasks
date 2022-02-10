import './App.css';
import {useState} from "react";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
        <h1>{value}</h1>
      <input type="input" value={value} onChange={(e) => {
          setValue(e.target.value);
        }
      }/>
    </div>
  );
}

export default App;
