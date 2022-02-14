import { loadCurrentUser } from './currentUserAPI';

export function currentUserReducer(state = {}, action) {
  if (action.type === 'edit-current-user-name') {
    return {
      ...state,
      name: action.payload.name,
    };
  }

  return state;
}

export const initialCurrentUser = {
  name: 'Joe Doe',
};

export function selectName(state) {
  return state.currentUser.name;
}

export function editName(newName) {
  // action creator
  // this function returns action
  return {
    type: 'edit-current-user-name',
    payload: {
      name: newName,
    },
  };
}

export function loadUser() {
  return (dispatch) => {
    return loadCurrentUser().then((loadedUser) => {
      dispatch(editName(loadedUser.name));
    });
  };
}
