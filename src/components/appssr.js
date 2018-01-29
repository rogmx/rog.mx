import { h, render } from 'preact' // eslint-disable-line

import 'normalize.css/normalize.css'
import '../style'

let root

function init () {
  let App = require('./app').default
  root = render(<App />, document.body, document.getElementById('app'))
}

init()
