import { all } from 'redux-saga/effects';
import currentCitySaga from './currentCity/saga';
import homeSaga from './home/saga';
import authSaga from './auth/saga';

export default function* rootSaga() {
    yield all([
        currentCitySaga(),
        homeSaga(),
        authSaga(),
    ]);
}
