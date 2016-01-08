import { CHANGE_OWNER_NAME, CHANGE_PROJECT_NAME } from '../constants/AppConstants';

export function changeProjectName(name) {
  return { type: CHANGE_PROJECT_NAME, name };
}

export function changeOwnerName(name) {
  return { type: CHANGE_OWNER_NAME, name };
}

export function asyncChangeProjectName(name) {
  return (dispatch) => {
    return dispatch(changeProjectName(name));
  };
}

export function asyncChangeOwnerName(name) {
  return (dispatch) => {
    return dispatch(changeOwnerName(name));
  };
}
