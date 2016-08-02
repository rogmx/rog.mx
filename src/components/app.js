import { h, Component } from 'preact' // eslint-disable-line
import { Router } from 'preact-router'

import AboutCard from './AboutCard'

export default class App extends Component {
  /** Gets fired when the route changes.
   *  @param {Object} event    "change" event from [preact-router](http://git.io/preact-router)
   *  @param {string} event.url  The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url
  }

  render () {
    return (
      <div id='app'>
        <Router onChange={this.handleRoute}>
          <AboutCard path='/' />
        </Router>
      </div>
    )
  }
}
