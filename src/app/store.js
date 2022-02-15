import createSagaMiddleWare from 'redux-saga';
import { applyMiddleware, combineReducers } from 'redux';
import { citiesReducer, initialCities } from './cities/reducer';
import { weatherReducer } from './weather/reducer';
import { currentCityReducer } from "./currentCity/reducer";
import thunk from "redux-thunk";
import appSagas from "./currentCity/saga";
const { createStore } = require('redux');

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(
  combineReducers({
    cities: citiesReducer,
    weatherData: weatherReducer,
    currentCityWeather: currentCityReducer
  }),
  {
    cities: initialCities,
    weatherData: [],
    currentCityWeather : {}
  },
  applyMiddleware(sagaMiddleWare, thunk)
);

sagaMiddleWare.run(appSagas);
export default store;
