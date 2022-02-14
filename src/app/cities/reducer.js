import { Action } from './actions';

export function citiesReducer(state = {}, action) {
  // if (action.type === 'edit-current-user-name') {
  //     return {
  //         ...state,
  //         name: action.payload.name,
  //     };
  // }
  switch (action.type) {
    case Action.GET_CITIES_REQUEST:
      return {
        ...state,
      };
  }

  return state;
}

export const initialCities = [
  {
    id: 1,
    title: 'London',
  },
  {
    id: 2,
    title: 'Moscow',
  },
  {
    id: 3,
    title: 'St. Petersburg',
  },
];
