import * as actionTypes from './actions';

const initialState = {
    user: {

    },
    uploadCoverSuccess: null,
    uploadCoverError: null,
};

export function profileReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.UPLOAD_COVER_REQUEST:
            state = {
                ...state,
                uploadCoverSuccess: false,
                uploadCoverError: false,
            };
            break;
        case actionTypes.UPLOAD_COVER_SUCCESS:
            state = {
                ...state,
                uploadCoverSuccess: true,
                uploadCoverError: false,
            };
            break;
        case actionTypes.UPLOAD_COVER_ERROR:
            state = {
                ...state,
                uploadCoverSuccess: false,
                uploadCoverError: true,
            };
            break;
    }

    return state;
}
