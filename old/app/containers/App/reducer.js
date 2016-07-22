/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true)
 */

import { LOAD_CHARMING_FAN, LOAD_CHARMING_FAN_ERROR, LOAD_CHARMING_FAN_SUCCESS,
} from './constants'
import { fromJS } from 'immutable'

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  userData: fromJS({
    fan: false,
  }),
})

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CHARMING_FAN:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'fan'], false)
    case LOAD_CHARMING_FAN_SUCCESS:
      return state
        .setIn(['userData', 'fan'], action.fan)
        .set('loading', false)
        .set('currentUser', action.username)
    case LOAD_CHARMING_FAN_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false)
    default:
      return state
  }
}

export default homeReducer