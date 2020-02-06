import { h, Component } from 'preact' // eslint-disable-line
import { Router } from 'preact-router'

import AboutCard from './AboutCard'

export default class App extends Component {
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
