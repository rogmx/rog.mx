import { h } from 'preact'
import render from 'preact-render-to-string'

import App from '../src/components/app'

module.exports = function () {
  return render(h(App))
}
