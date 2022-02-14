import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function DailyWeather() {
  // const cities = useSelector((state) => state.cities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'GET_DAILY_WEATHER_REQUEST',
    });
  }, []);

  return <div>hello armenia</div>;
}

export default DailyWeather;
