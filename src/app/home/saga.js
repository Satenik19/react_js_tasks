import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';
import { GET_POSTS_REQUEST } from './actions';

function* getPosts() {
    try {
        const response = yield axios.get(
            `${process.env.REACT_APP_API_ENDPOINT}/posts`,
        );
        if (response?.status === 200) {
            console.log(response.data, 'response');
            // yield put(getWeatherDataSuccess(response.data));
        }
    } catch (error) {
        console.log(error);
    } finally {
        // yield put(apiCalled());
    }
}

export default function* () {
    yield takeLatest(GET_POSTS_REQUEST, getPosts);
}
