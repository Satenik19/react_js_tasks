import { takeLatest, put } from 'redux-saga/effects';
import axios from '../../services/axios';
import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
} from './actions';

function* signIn(action) {
    try {
        const response = yield axios.post(
            `${process.env.REACT_APP_API_ENDPOINT}/login`, {
                ...action.payload,
            },
        );
        if (response?.status === 200) {
            yield put({
                type: LOGIN_USER_SUCCESS,
                payload: {
                    data: response.data,
                },
            });
        }
    } catch (error) {
        console.log(error, 'err');
        yield put({ type: LOGIN_USER_ERROR, error });
    }
}

function* signUp(action) {
    try {
        const response = yield axios.post(
            `${process.env.REACT_APP_API_ENDPOINT}/register`, {
                ...action.payload.data,
            },
        );
        if (response?.status === 200) {
            yield put({
                type: REGISTER_SUCCESS,
            });
        }
    } catch (error) {
        yield put({ type: REGISTER_ERROR, error });
    }
}

export default function* () {
    yield takeLatest(LOGIN_USER_REQUEST, signIn);
    yield takeLatest(REGISTER_REQUEST, signUp);
}
