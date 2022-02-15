import {
    GET_DAILY_WEATHER_REQUEST,
    GET_DAILY_WEATHER_SUCCESS,
    GET_DAILY_WEATHER_ERROR,
} from './actionTypes';

export const getWeatherData = () => {
    return {
        type: GET_DAILY_WEATHER_REQUEST,
    };
};

export const getWeatherDataSuccess = (currentCityWeather) => {
    return {
        type: GET_DAILY_WEATHER_SUCCESS,
        payload: currentCityWeather,
    };
};