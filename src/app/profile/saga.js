import { takeLatest, put } from 'redux-saga/effects';
import axios from '../../services/axios';
import {
    UPLOAD_COVER_ERROR,
    UPLOAD_COVER_REQUEST,
    UPLOAD_COVER_SUCCESS,
} from './actions';

function* uploadCover(action) {
    try {
        const response = yield axios.post(
            `${process.env.REACT_APP_API_ENDPOINT}/upload-cover`, {
                ...action.payload,
            },
        );
        if (response?.status === 200) {
            yield put({ type: UPLOAD_COVER_SUCCESS, payload: response.data.user });
        }
    } catch (error) {
        yield put({ type: UPLOAD_COVER_ERROR, error });
    }
}

export default function* () {
    yield takeLatest(UPLOAD_COVER_REQUEST, uploadCover);
}
