import { all } from 'redux-saga/effects';
import currentCitySaga from './currentCity/saga';
import homeSaga from './home/saga';

export default function* rootSaga() {
    yield all([
        currentCitySaga(),
        homeSaga(),
    ]);
}
