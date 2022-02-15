import { takeLatest, put } from 'redux-saga/effects';
import { GET_DAILY_WEATHER_REQUEST } from './actionTypes';
import axios from 'axios';
import { getWeatherDataSuccess } from './actions';

function* getDailyWeather(action) {
  try {
    const city = action?.payload?.city ? action.payload.city : 'Yerevan';
    const response = yield axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=8a9bf89d7930477ea40163056221402&q=${city}&days=5`
    );
    if (response?.status === 200) {
      yield put(getWeatherDataSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
  } finally {
    // yield put(apiCalled());
  }
}

function* appSagas() {
  yield takeLatest(GET_DAILY_WEATHER_REQUEST, getDailyWeather);
}
export default appSagas;
