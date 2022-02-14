import createSagaMiddleWare from 'redux-saga';
import { applyMiddleware, combineReducers } from 'redux';
import { citiesReducer, initialCities } from './cities/reducer';
import appSagas from './weather/saga';
import { weatherReducer } from './weather/reducer';
const { createStore } = require('redux');

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(
  combineReducers({
    cities: citiesReducer,
    weatherData: weatherReducer,
  }),
  {
    cities: initialCities,
    weatherData: [],
  },
  applyMiddleware(sagaMiddleWare)
);

sagaMiddleWare.run(appSagas);
export default store;
