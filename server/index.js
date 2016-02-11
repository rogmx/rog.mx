/* eslint consistent-return:0 */

const express = require('express')
const http = require('http')
const https = require('https')
const fs = require('fs')

const logger = require('./logger')
const ngrok = require('ngrok')

const frontend = require('./middlewares/frontendMiddleware')
const isDev = process.env.NODE_ENV !== 'production'

const app = express()
// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi)

// Initialize frontend middleware that will serve your JS app
const webpackConfig = isDev
  ? require('../internals/webpack/webpack.dev.babel')
  : require('../internals/webpack/webpack.prod.babel')

app.use(frontend(webpackConfig))

// Start your app.
function serverStarted (err) {
  if (err) {
    return logger.error(err)
  }

  // Connect to ngrok in dev mode
  if (isDev) {
    ngrok.connect(8000, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr)
      }

      logger.appStarted(8000, url)
    })
  } else {
    console.log('Started on Production')
    logger.appStarted(process.env.PORT || 8000)
  }
}

if (!isDev) {
  const ssl = {
    key: fs.readFileSync('/etc/letsencrypt/live/rog.mx/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/rog.mx/fullchain.pem'),
    ca: fs.readFileSync('/etc/letsencrypt/live/rog.mx/chain.pem')
  }

  https.createServer(ssl, app).listen(process.env.PORT || 8443, serverStarted)
} else {
  http.createServer(app).listen(process.env.PORT || 8000, serverStarted)
}
