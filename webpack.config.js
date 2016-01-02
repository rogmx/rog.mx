module.exports = {
  entry: './client/app.js',
  output: {
    filename: 'client/public/bundle.js',
  },
  module: {
    loaders: [{
      exclude: /(node_modules|server\/server.js)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react'],
      },
    }],
  },
};
