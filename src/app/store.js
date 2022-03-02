import createSagaMiddleWare from 'redux-saga';
import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { citiesReducer } from './city/reducer';
import { weatherReducer } from './weather/reducer';
import { currentCityReducer } from './currentCity/reducer';
import { authReducer } from './auth/reducer';
import { postsReducer } from './post/reducer';
import appSagas from './sagas';
import { profileReducer } from './profile/reducer';

const { createStore } = require('redux');

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(
  combineReducers({
    cities: citiesReducer,
    weatherData: weatherReducer,
    currentCityWeather: currentCityReducer,
    userData: authReducer,
    postsData: postsReducer,
    profile: profileReducer,
  }),
  applyMiddleware(sagaMiddleWare, thunk),
);

sagaMiddleWare.run(appSagas);
export default store;
