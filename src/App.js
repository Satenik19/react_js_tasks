import './App.css';
import React from 'react';
import CityList from './components/cities/CityList';
import { Routes, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import DailyWeather from './components/dailyWeather/DailyWeather';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   editName,
//   loadUser,
//   selectName,
// } from './features/currentUser/currentUserSlice';

function App() {
  // const name = useSelector(selectName);
  // const dispatch = useDispatch();

  return (
    <Router>
      <div className="App">
        <ul className="App-header">
          <h1>Weather app</h1>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cities">Cities</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
          <li>
            <Link to="/daily">Daily weather</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/cities" element={<CityList />} />
          <Route path="/daily" element={<DailyWeather />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
