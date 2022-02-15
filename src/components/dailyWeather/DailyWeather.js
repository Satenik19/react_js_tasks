import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../loader/Loader';
import HourlyWeather from './HourlyWeather';
// import { Link } from 'react-router-dom';

function DailyWeather() {
  const dispatch = useDispatch();
  const { currentCityWeather } = useSelector(
    (state) => state.currentCityWeather
  );
  const [foreCast, setForecast] = useState([]);
  // const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch({
      type: 'GET_DAILY_WEATHER_REQUEST',
    });
  }, []);

  useEffect(() => {
    if (currentCityWeather) {
      // setForecast([...currentCityWeather.forecast.forecastday]);
      const data = [...currentCityWeather.forecast.forecastday];
      const newForeCast = data.map((day) => {
        return {
          ...day,
          showHourly: false,
        };
      });
      setForecast([...newForeCast]);
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
    const newForeCast = foreCast.map((day, i) => {
      if (i === index) {
        return {
          ...day,
          showHourly: true,
        };
      }
      return {
        ...day,
        showHourly: false,
      };
    });
    setForecast([...newForeCast]);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {foreCast.map(function (day, index) {
            return (
              <div key={index}>
                <div className="d-flex align-items-center">
                  {/*<Link to={`/daily/${city}/${day.date}`}>*/}
                  <b
                    onClick={() => {
                      showHourly(index);
                    }}
                  >
                    {showDate(day.date)}
                  </b>
                  {/*</Link>*/}
                  <p>
                    <img src={day.day?.condition?.icon || ''} alt="NO IMAGE" />
                  </p>
                </div>
                {day.showHourly ? (
                  <HourlyWeather hours={day.hour} key={index} />
                ) : null}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default DailyWeather;
