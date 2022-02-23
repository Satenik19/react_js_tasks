import {
    GET_POSTS_REQUEST,
} from './actions';

export function homeReducer(state = {}, action) {
    switch (action.type) {
        case GET_POSTS_REQUEST:
            state = {
                ...state,
            };
            break;
    }

    return state;
}
