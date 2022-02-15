import {GET_DAILY_WEATHER_REQUEST, GET_DAILY_WEATHER_SUCCESS} from './actionTypes';

const initialState = {
    currentCityWeather: {}
}

export function currentCityReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DAILY_WEATHER_REQUEST:
            console.log("start");
            state = {
                ...state
            };
            break;
        case GET_DAILY_WEATHER_SUCCESS:
            state = {
                ...state,
                currentCityWeather: action.payload
            };
            break;
    }

    return state;
}
