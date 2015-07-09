var
  path = require('path'),
  webpack = require('webpack');

console.log('require.resolve("react") in webpack.config.js: ', require.resolve("react"));

module.exports = {
  entry: "./js/app",
  output: {
    path: __dirname,
    filename: "main.js"
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
