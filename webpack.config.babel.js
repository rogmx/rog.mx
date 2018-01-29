import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import ReplacePlugin from 'replace-bundle-webpack-plugin'
import OfflinePlugin from 'offline-plugin'
import path from 'path'

const ENV = process.env.NODE_ENV || 'development'
const CSS_MAPS = ENV !== 'production'

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json', '.scss'],
    alias: {
      components: path.resolve(__dirname, 'src/components'),    // used for tests
      style: path.resolve(__dirname, 'src/style'),
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      // Transform our own .(sass|css) files with PostCSS and CSS-modules
      test: /\.(scss|css)$/,
      loader: ExtractTextPlugin.extract(
        {
          fallback: 'style-loader',
          use: [
            {
              loader: `css-loader?localIdentName=[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap=${CSS_MAPS}`
            },
            {
              loader: `postcss-loader`,
              options: {
                plugins: () => [require('autoprefixer')]
              }
            },
            {
              loader: `sass-loader?sourceMap=${CSS_MAPS}`
            }
          ]
        }
      )
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.(xml|html|txt|md)$/,
      loader: 'raw-loader'
    }, {
      test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)(\?.*)?$/i,
      loader: ENV === 'production' ? 'file-loader' : 'url-loader'
    }]
  },

  plugins: ([
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('style.css', {
      allChunks: true,
      disable: ENV !== 'production'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV)
    }),
    new HtmlWebpackPlugin({
      template: './index.ejs',
      minify: { collapseWhitespace: true }
    }),
    new CopyWebpackPlugin([
      { from: './manifest.json', to: './' },
      { from: './favicon.ico', to: './' }
    ])
  ]).concat(ENV === 'production' ? [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        warnings: false,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        negate_iife: false
      }
    }),

    // strip out babel-helper invariant checks
    new ReplacePlugin([{
      // this is actually the property name https://github.com/kimhou/replace-bundle-webpack-plugin/issues/1
      partten: /throw\s+(new\s+)?[a-zA-Z]+Error\s*\(/g,
      replacement: () => 'return;('
    }]),
    new OfflinePlugin({
      relativePaths: false,
      AppCache: false,
      excludes: ['_redirects'],
      ServiceWorker: {
        events: true
      },
      cacheMaps: [{
        match: /.*/,
        to: '/',
        requestTypes: ['navigate']
      }],
      publicPath: '/'
    })
  ] : []),

  stats: { colors: true },

  node: {
    global: true,
    process: true,
    Buffer: true,
    __filename: false,
    __dirname: true,
    setImmediate: false,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },

  devtool: ENV === 'production' ? 'source-map' : 'cheap-module-eval-source-map',

  devServer: {
    port: process.env.PORT || 8080,
    host: 'localhost',
    colors: true,
    publicPath: '/',
    contentBase: './src',
    historyApiFallback: true,
    open: true,
    proxy: {
      // OPTIONAL: proxy configuration:
      // '/optional-prefix/**': { // path pattern to rewrite
      //   target: 'https://proxy.rog.mx',
      //   pathRewrite: path => path.replace(/^\/[^\/]+\//, '')   // strip first path segment
      // }
    }
  }
}
