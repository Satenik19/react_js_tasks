import { takeLatest, put } from 'redux-saga/effects';
import axios from '../../services/axios';
import {
    UPLOAD_COVER_ERROR,
    UPLOAD_COVER_REQUEST,
    UPLOAD_COVER_SUCCESS,
} from './actions';

function* uploadCover(action) {
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        const formData = new FormData();
        formData.append('image', action.payload.file);
        const response = yield axios.post(
            `${process.env.REACT_APP_API_ENDPOINT}/upload-cover`, formData, config,
        );
        if (response?.status === 200) {
            yield put({ type: UPLOAD_COVER_SUCCESS });
        }
    } catch (error) {
        console.log(error);
        yield put({ type: UPLOAD_COVER_ERROR, error });
    }
}

export default function* () {
    yield takeLatest(UPLOAD_COVER_REQUEST, uploadCover);
}
