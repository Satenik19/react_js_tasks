import { Action } from './actions';

export function citiesReducer(state = {}, action) {
  switch (action.type) {
    case Action.GET_CITIES_REQUEST:
      state =  {
        ...state,
      };
      break;
    case Action.CHANGE_FAVORITE:
      state = state.map((city) => {
        if (city.id === action.payload.id) {
          return {
            ...city,
            isFavourite:action.payload.favourite,
          }
        }

        return {
          ...city
        }
      })
      break;
  }

  return state;
}

export const initialCities = [
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
