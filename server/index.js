/* eslint consistent-return:0 */

const express = require('express')
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

const port = !isDev ? [80, 443] : [3000, 3003]

if (!isDev) {
  const server = https.createServer({
    key: fs.readFileSync('./tls/key.pem'),
    cert: fs.readFileSync('./tls/cert.pem')
  }, app)

  server.listen(port[1])
}

// Start your app.
app.listen(port[0], (err) => {
  if (err) {
    return logger.error(err)
  }

  // Connect to ngrok in dev mode
  if (isDev) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr)
      }

      logger.appStarted(port, url)
    })
  } else {
    logger.appStarted(port)
  }
})
