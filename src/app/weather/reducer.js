import { GET_DAILY_WEATHER_REQUEST } from './actions';

export function weatherReducer(state = {}, action) {
  switch (action.type) {
    case GET_DAILY_WEATHER_REQUEST:
      return {
        ...state,
      };
  }

  return state;
}
