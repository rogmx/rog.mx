import { h, render } from 'preact' // eslint-disable-line

import 'normalize.css/normalize.css'
import './style'

function init () {
  let App = require('./components/app').default
  render(<App />, document.body, document.getElementById('app'))
}

// register ServiceWorker via OfflinePlugin, for prod only:
if (process.env.NODE_ENV === 'production') {
  require('./pwa')
}

// in development, set up HMR:
if (module.hot) {
  // require('preact/devtools')
  module.hot.accept('./components/app', () => requestAnimationFrame(init))
}

init()
