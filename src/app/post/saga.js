import { takeLatest, put } from 'redux-saga/effects';
import axios from '../../services/axios';
import { GET_POSTS_REQUEST } from './actions';

function* getPosts() {
    try {
        const response = yield axios.get(
            `${process.env.REACT_APP_API_ENDPOINT}/posts`,
        );
        if (response?.status === 200) {
            yield put({ type: 'GET_POSTS_SUCCESS', payload: response.data.posts });
        }
    } catch (error) {
        console.log(error);
    }
}

export default function* () {
    yield takeLatest(GET_POSTS_REQUEST, getPosts);
}
