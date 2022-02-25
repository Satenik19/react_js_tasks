import createSagaMiddleWare from 'redux-saga';
import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { citiesReducer } from './city/reducer';
import { weatherReducer } from './weather/reducer';
import { currentCityReducer } from './currentCity/reducer';
import { authReducer } from './auth/reducer';
import { postsReducer } from './home/reducer';
import appSagas from './sagas';

const { createStore } = require('redux');

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(
  combineReducers({
    cities: citiesReducer,
    weatherData: weatherReducer,
    currentCityWeather: currentCityReducer,
    authReducer,
    posts: postsReducer,
  }),
  applyMiddleware(sagaMiddleWare, thunk),
);

sagaMiddleWare.run(appSagas);
export default store;
