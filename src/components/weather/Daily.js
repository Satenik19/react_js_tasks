import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../loader/index';
import HourlyWeather from './Hourly';

function DailyWeather() {
  const dispatch = useDispatch();
  const { currentCityWeather } = useSelector(
    (state) => state.currentCityWeather,
  );
  const [foreCast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch({
      type: 'GET_DAILY_WEATHER_REQUEST',
    });
  }, []);

  useEffect(() => {
    if (currentCityWeather) {
      const newForeCast = currentCityWeather?.forecast?.forecastday?.map((day) => ({
        ...day,
        showHourly: false,
      }));
      setForecast(newForeCast);
      setLoading(false);
    }
  }, [currentCityWeather]);

  const showDate = (date) => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const d = new Date(date);

    return `${d.getDate()} ${monthNames[d.getMonth()]}, ${d.getFullYear()}`;
  };

  const showHourly = (index) => {
    const newForeCast = foreCast.map((day, i) => ({
      ...day,
      showHourly: i === index,
    }));
    setForecast(newForeCast);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {foreCast?.map((day, index) => (
            <div key={index}>
              <div className="d-flex align-items-center">
                {/* <Link to={`/daily/${city}/${day.date}`}> */}
                <b onClick={() => showHourly(index)}>
                  {showDate(day.date)}
                </b>
                {/* </Link> */}
                <p>
                  <img src={day.day?.condition?.icon || ''} aria-hidden alt="NO IMAGE" />
                </p>
              </div>
              {day.showHourly ? (
                <HourlyWeather hours={day.hour} key={index} />
              ) : null}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default DailyWeather;
