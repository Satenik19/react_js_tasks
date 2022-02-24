import React from 'react';
import { Routes } from 'react-router-dom';
import './App.css';
import routeComponents from './components/routes/List';

function App() {
  return (
    <div className="App">
      <Routes>
        {routeComponents}
      </Routes>
    </div>
  );
}

export default App;
