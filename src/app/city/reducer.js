import * as actionTypes from './actions';

const initialState = [
  {
    id: 1,
    title: 'London',
    isFavourite: true,
  },
  {
    id: 2,
    title: 'Moscow',
    isFavourite: true,
  },
  {
    id: 3,
    title: 'St. Petersburg',
    isFavourite: true,
  },
  {
    id: 4,
    title: 'Paris',
    isFavourite: false,
  },
  {
    id: 5,
    title: 'Berlin',
    isFavourite: false,
  },
  {
    id: 6,
    title: 'New York',
    isFavourite: false,
  },
];

export function citiesReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_CITIES_REQUEST:
      state = {
        ...state,
      };
      break;
    case actionTypes.CHANGE_FAVORITE:
      state = state.map((city) => ({
          ...city,
          isFavourite: city.id === action.payload.id ? action.payload.favourite : city.isFavourite,
        }));
      break;
  }

  return state;
}
