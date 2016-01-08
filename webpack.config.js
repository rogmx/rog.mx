/* eslint no-var: 0 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackConfig = (options) => {
  var entry;
  var plugins;
  var cssLoaders;
  if (options.prod) {
    entry = [
      path.resolve(__dirname, 'client/app.js'),
    ];
    cssLoaders = ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader');
    plugins = [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
      }),
      new HtmlWebpackPlugin({
        template: 'client/templates/index.html',
        minify: {
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
        inject: true,
      }),
      new ExtractTextPlugin('/client/css/main.css'),
    ];
  }

  return {
    entry,
    output: {
      path: path.resolve(__dirname, 'client/public'),
      filename: 'app.js',
    },
    module: {
      loaders: [
        {
          loader: 'babel-loader',
          exclude: /(node_modules|server\/server.js)/,
          query: {
            presets: ['es2015', 'react'],
          },
        }, {
          loader: cssLoaders,
          test: /\.css$/,
        },
      ],
    },
    plugins,
    postcss() {
      return [
        require('postcss-import')({
          glob: true,
          onImport: function importPostCSS(files) {
            files.forEach(this.addDependency);
          }.bind(this),
        }),
        require('postcss-simple-vars')(),
        require('postcss-focus')(),
        require('autoprefixer')({
          browsers: ['last 2 versions', 'IE > 8'],
        }),
        require('postcss-reporter')({
          clearMessages: true,
        }),
      ];
    },
    target: 'web',
    stats: false,
    progress: true,
  };
};

module.exports = webpackConfig({ prod: true });
