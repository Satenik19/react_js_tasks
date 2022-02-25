import * as actionTypes from './actions';
import { showToast } from '../../services/toast';

const initialState = [
        {
            id: 1,
            title: 'Test',
        },
    ];

export function postsReducer(state = initialState, action) {
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
            showToast('success', 'Welcome');
            break;
    }

    return state;
}
