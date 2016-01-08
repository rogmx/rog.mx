import { CHANGE_OWNER_NAME, CHANGE_PROJECT_NAME } from '../constants/AppConstants';
import assignToEmpty from '../utils/assign';

const initialState = {
  projectName: 'React.js Boilerplate',
  ownerName: 'Rogelio Alberto',
};

function homeReducer(state = initialState, action) {
  Object.freeze(state);
  switch (action.type) {
    case CHANGE_OWNER_NAME:
      return assignToEmpty(state, {
        ownerName: action.name,
      });
    case CHANGE_PROJECT_NAME:
      return assignToEmpty(state, {
        projectName: action.name,
      });
    default:
      return state;
  }
}

export default homeReducer;
