import { all } from 'redux-saga/effects';
import currentCitySaga from './currentCity/saga';
import homeSaga from './post/saga';
import authSaga from './auth/saga';

export default function* rootSaga() {
    yield all([
        currentCitySaga(),
        homeSaga(),
        authSaga(),
    ]);
}
