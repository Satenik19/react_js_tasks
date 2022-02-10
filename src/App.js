import './App.css';
import Bye from "./Bye";

function App() {
  let name = "Khachatur";
  return (
    <div className="App">
      <Bye name={name} age={22} gender="male"/>
    </div>
  );
}

export default App;
