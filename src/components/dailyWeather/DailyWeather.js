import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Loader from "../loader/Loader";

function DailyWeather() {
  const dispatch = useDispatch();
  const { currentCityWeather } = useSelector((state) => state.currentCityWeather);
  const [ foreCast, setForecast ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    dispatch({
      type: 'GET_DAILY_WEATHER_REQUEST',
    });
  }, []);

    useEffect(() => {
        if (currentCityWeather) {
            setForecast([...currentCityWeather.forecast.forecastday]);
            setLoading(false);
        }
    }, [currentCityWeather])

  return (
      <>
        {loading ? <Loader/> : (
            <div>
                {foreCast.map(function (day, index) {
                    return (
                        <div key={index}>
                            <p>{day.date}</p>

                            {day.hour.map(function (hour, index) {
                                return <div key={index}>
                                    {index % 3 ===0 ? (
                                            <div key={index}>
                                                {hour.time}
                                            </div>
                                        )
                                     : null}
                                </div>
                            })}
                        </div>
                    );
                })}
            </div>
        )}
      </>
  );
}

export default DailyWeather;
