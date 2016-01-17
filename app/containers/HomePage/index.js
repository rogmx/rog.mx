/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import shouldPureComponentUpdate from 'react-pure-render/function'

import { createSelector } from 'reselect'

import usernameSelector from 'selectors/usernameSelector'
import loadingSelector from 'selectors/loadingSelector'
import errorSelector from 'selectors/errorSelector'

import {
  changeUsername,
} from './actions'

import {
  loadCharmingFan,
} from '../App/actions'

// import LoadingIndicator from 'components/LoadingIndicator'

// import styles from './styles.css'

export class HomePage extends React.Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  /**
   * Changes the route
   *
   * @param  {string} route The route we want to go to
   */
  openRoute = (route) => {
    this.props.changeRoute(route)
  }

  render() {
    /* let mainContent = null

    // Show a loading indicator when we're loading
    if (this.props.loading) {
      mainContent = (<List component={LoadingIndicator} />)

    // Show an error if there is one
    } else if (this.props.error !== false) {
      const ErrorComponent = () => (
        <ListItem content={'Something went wrong, please try again!'} />
      )
      mainContent = (<List component={ErrorComponent} />)
    } */

    return (
      <article>
        <div>
        </div>
      </article>
    )
  }
}

HomePage.propTypes = {
  changeRoute: React.PropTypes.func,
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  repos: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func,
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    changeRoute: (url) => dispatch(push(url)),
    onSubmitForm: (evt) => {
      evt.preventDefault()
      dispatch(loadCharmingFan())
    },

    dispatch,
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(createSelector(
  usernameSelector(),
  loadingSelector(),
  errorSelector(),
  (username, loading, error) => ({ username, loading, error })
), mapDispatchToProps)(HomePage)
