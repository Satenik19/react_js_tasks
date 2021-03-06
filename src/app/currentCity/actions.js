export const GET_DAILY_WEATHER_REQUEST = 'GET_DAILY_WEATHER_REQUEST';
export const GET_DAILY_WEATHER_SUCCESS = 'GET_DAILY_WEATHER_SUCCESS';
export const GET_DAILY_WEATHER_ERROR = 'GET_DAILY_WEATHER_ERROR';

export const getWeatherDataSuccess = (currentCityWeather) => ({
    type: GET_DAILY_WEATHER_SUCCESS,
    payload: currentCityWeather,
  });
