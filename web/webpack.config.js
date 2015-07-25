var
  path = require('path'),
  webpack = require('webpack');

module.exports = {
  entry: {
    vendor: []
    app: './js/app',
  },
  output: {
    path: __dirname,
    filename: 'main.js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.jsx$/, loader: 'babel-loader' },
      { test: require.resolve('react'), loader: 'expose?React' }
    ]
  }
};
