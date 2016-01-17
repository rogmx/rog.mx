/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your appliction state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { LOAD_CHARMING_FAN, LOAD_CHARMING_FAN_ERROR, LOAD_CHARMING_FAN_SUCCESS,
} from './constants'

/**
 * Load the Fan, this action starts the getGithubData saga
 *
 * @return {object} An action object with a type of LOAD_CHARMING_FAN
 */
export function loadCharmingFan() {
  return {
    type: LOAD_CHARMING_FAN,
  }
}

/**
 * Dispatched when the repositories are loaded by the getGithubData saga
 *
 * @param  {array} fan The fan data
 * @param  {string} username The current username
 *
 * @return {object} An action object with a type of LOAD_CHARMING_FAN_SUCCESS passing the fan data
 */
export function charmingFanLoaded(fan, username) {
  return {
    type: LOAD_CHARMING_FAN_SUCCESS,
    fan,
    username,
  }
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of LOAD_CHARMING_FAN_ERROR passing the error
 */
export function charmingFanError(error) {
  return {
    type: LOAD_CHARMING_FAN_ERROR,
    error,
  }
}
