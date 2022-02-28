import * as actionTypes from './actions';

const initialState = {
    posts: [],
    addPostSuccess: false,
    addPostError: false,
};

export function postsReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_POSTS_REQUEST:
            state = {
                ...state,
            };
            break;
        case actionTypes.GET_POSTS_SUCCESS:
            state = {
                ...state,
                posts: [...action.payload],
            };
            break;
        case actionTypes.ADD_POST_REQUEST:
            state = {
                ...state,
                addPostSuccess: false,
                addPostError: false,
            };
            break;
        case actionTypes.ADD_POST_SUCCESS:
            state = {
                ...state,
                posts: [...state.posts, { ...action.payload }],
                addPostSuccess: true,
                addPostError: false,
            };
            break;
        case actionTypes.ADD_POST_ERROR:
            state = {
                ...state,
                addPostSuccess: false,
                addPostError: true,
            };
            break;
    }

    return state;
}
