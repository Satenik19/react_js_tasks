import * as actionTypes from './actions';

export function postsReducer(state = [], action) {
    switch (action.type) {
        case actionTypes.GET_POSTS_REQUEST:
            state = [
                ...state,
            ];
            break;
        case actionTypes.GET_POSTS_SUCCESS:
            state = [
                ...state,
                ...action.payload,
            ];
            break;
    }

    return state;
}
