import './App.css';
import React from 'react';
import CityList from './components/cities/CityList';
import { Routes, Route } from 'react-router-dom';
import DailyWeather from './components/dailyWeather/DailyWeather';
import CurrentCityWeather from './components/currentCity/CurrentCityWeather';
import Favourites from './components/cities/Favourites';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <div className="App">
      <h1>Weather app</h1>
      <NavBar />
      <Routes>
        <Route path="/cities" element={<CityList />} />
        <Route path="/" element={<CityList />} />
        <Route path="/weather" component={CurrentCityWeather}>
          <Route path=":city" element={<CurrentCityWeather />} />
        </Route>
        <Route path="/daily" element={<DailyWeather />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/favourites/:title" element={<DailyWeather />} />
      </Routes>
    </div>
  );
}

export default App;
