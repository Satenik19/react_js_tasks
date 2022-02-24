import * as actionTypes from './actions';

const initialUser = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
};

export function authReducer(state = initialUser, action) {
    switch (action.type) {
        case actionTypes.LOGIN_USER_SUCCESS:
            state = {
                ...state,
                user: action.payload,
            };
            localStorage.setItem('access_token', action.payload.token);
            break;
        case actionTypes.LOGOUT_USER_SUCCESS:
            localStorage.removeItem('access_token');
            break;
    }

    return state;
}
