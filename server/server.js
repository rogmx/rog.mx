const path = require('path')
const express = require('express')
const sass = require('node-sass')

// Support .jsx on Node runtime
require('babel-register')({
  extensions: ['.jsx', '.js'],
  sourceMaps: true,
  presets: [
    ['es2015', {loose: true}],
    'stage-0'
  ],
  plugins: [
    ['css-modules-transform', {
      preprocessCss: (data, file) => {
        try {
          return sass.renderSync({data, file}).css.toString('utf8')
        } catch (e) {
          console.error(e)
        }
      },
      generateScopedName: '[local]__',
      extensions: ['.scss']
    }],
    ['transform-assets', {
      extensions: ['png'],
      name: '[name].[ext]?[sha512:hash:base64:7]'
    }],
    ['transform-decorators-legacy'],
    ['transform-react-jsx', {pragma: 'h'}]
  ]
})

// Server-side Entry (.jsx)
const ssr = require('./ssr')

// basic HTTP server via express:
const app = express()

const BUNDLE_FILE_URL = 'bundle.js'
const BUNDLE_FILE_URL_CSS = 'style.css'
app.use('/', express.static(path.join(__dirname, '../build')))

// on each request, render and return a component:
app.get('/', (req, res) => {
  const ssrHtml = ssr()
  // send it back wrapped up as an HTML5 document:
  res.send(`<!DOCTYPE html>
    <html>
    <head>
      <title>Preact SSR</title>
      <link href="/${BUNDLE_FILE_URL_CSS}" rel="stylesheet">
    </head>
    <body>
      ${ssrHtml}
      <script type="text/javascript" src="${BUNDLE_FILE_URL}"></script>
    </body>
    </html>`)
})

// start server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Preact Server start on ${PORT}`)
})
