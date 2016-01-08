// Gets called when running npm start
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../webpack.config.js';
import debug from 'debug';

const d = debug('app:server');

d('Starting server...');

new WebpackDevServer(webpack(config), { // Start a server
  publicPath: config.output.publicPath,
  hot: true, // With hot reloading
  inline: false,
  historyApiFallback: true,
  quiet: true, // Without logging
}).listen(4000, 'localhost', function listenServer(err) {
  if (err) {
    d(err);
  } else {
    d('Server started');
    d('Listening at localhost:3000');
  }
});
