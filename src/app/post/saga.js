import { takeLatest, put } from 'redux-saga/effects';
import axios from '../../services/axios';
import {
    ADD_POST_ERROR,
    ADD_POST_REQUEST, ADD_POST_SUCCESS, GET_POSTS_ERROR, GET_POSTS_REQUEST, GET_POSTS_SUCCESS,
} from './actions';

function* getPosts() {
    try {
        const response = yield axios.get(
            `${process.env.REACT_APP_API_ENDPOINT}/posts`,
        );
        if (response?.status === 200) {
            yield put({ type: GET_POSTS_SUCCESS, payload: response.data.posts });
        }
    } catch (error) {
        yield put({ type: GET_POSTS_ERROR, error });
    }
}

function* addPost(action) {
    try {
        const response = yield axios.post(
            `${process.env.REACT_APP_API_ENDPOINT}/posts`, {
                ...action.payload,
            },
        );
        if (response?.status === 200) {
            yield put({ type: ADD_POST_SUCCESS, payload: response.data.post });
        }
    } catch (error) {
        console.log(error, 'error');
        yield put({ type: ADD_POST_ERROR, error });
    }
}

export default function* () {
    yield takeLatest(GET_POSTS_REQUEST, getPosts);
    yield takeLatest(ADD_POST_REQUEST, addPost);
}
