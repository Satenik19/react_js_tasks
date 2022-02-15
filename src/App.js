import './App.css';
import React from 'react';
import CityList from './components/cities/CityList';
import { Routes, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import DailyWeather from './components/dailyWeather/DailyWeather';
import CurrentCityWeather from "./components/currentCity/CurrentCityWeather";
import Favourites from "./components/cities/Favourites";

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
            <Link to="/weather">Current city weather</Link>
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
          <Route path="/weather" element={<CurrentCityWeather />} />
          <Route path="/daily" element={<DailyWeather />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/favourites/:title" element={<DailyWeather />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
