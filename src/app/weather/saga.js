import { takeLatest } from 'redux-saga/effects';
import { GET_DAILY_WEATHER_REQUEST } from './actions';
import axios from 'axios';

function* getDailyWeather() {
  try {
    const response = yield axios.get(
      'http://api.weatherapi.com/v1/forecast.json?key=8a9bf89d7930477ea40163056221402&q=Yerevan&days=5'
    );
    if (response?.status === 200) {
      console.log(response.data, 'dataaaaaa');
      // yield put(storeListData(response.data));
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
