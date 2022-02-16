import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GET_DAILY_WEATHER_REQUEST } from '../../app/currentCity/actions';
import Loader from '../loader/index';

function CurrentCityWeather() {
  const dispatch = useDispatch();

  const { currentCityWeather } = useSelector(
    (state) => state.currentCityWeather,
  );

  const [unit, setUnit] = useState('C');
  const [temp, setTemperature] = useState(null);
  const [loading, setLoading] = useState(true);

  const { city } = useParams();

  useEffect(() => {
    dispatch({
      type: GET_DAILY_WEATHER_REQUEST,
      payload: {
        city,
      },
    });
  }, []);

  useEffect(() => {
    if (currentCityWeather) {
      setTemperature(currentCityWeather.current?.temp_c);
      setLoading(false);
    }
  }, [currentCityWeather]);

  useEffect(() => {
    dispatch({
      type: GET_DAILY_WEATHER_REQUEST,
      payload: {
        city,
      },
    });
  }, [city]);

  const convertTempUnit = () => {
    let calculatedTemp;
    if (unit === 'C') {
      calculatedTemp = parseFloat(((temp * 9) / 5 + 32).toFixed(2));
    } else {
      calculatedTemp = parseFloat((((temp - 32) * 5) / 9).toFixed(2));
    }
    setTemperature(calculatedTemp);
    setUnit(unit === 'C' ? 'F' : 'C');
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h1>
            Location name:
            {currentCityWeather?.location?.name || ''}
          </h1>
          <p>
            <span>The weather today is: </span>
            {currentCityWeather?.current?.condition?.text || ''}
          </p>
          <p>
            <img
              src={currentCityWeather?.current?.condition?.icon || ''}
              aria-hidden
              alt="NO IMAGE"
            />
          </p>
          <p>
            <span>Temperature is: </span>
            {temp}
            &deg;
            {unit}
            <button className="btn btn-primary ms-2" type="button" onClick={convertTempUnit}>
              Convert to
              {' '}
              {unit === 'C' ? 'Fahrenheit' : 'Celsius'}
            </button>
          </p>
          <p>
            <span>Humidity is: </span>
            {currentCityWeather?.current?.humidity || ''}
          </p>
          <p>
            <span>Wind speed is: </span>
            {currentCityWeather?.current?.wind_kph || ''}
            {' '}
            km per hour
          </p>
        </div>
      )}
    </>
  );
}

export default CurrentCityWeather;
