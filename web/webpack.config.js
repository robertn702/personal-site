var
  path = require('path'),
  webpack = require('webpack');

module.exports = {
  entry: {
    app: './js/app',
    vendor: [
      'classnames',
      'jquery',
      'lodash',
      'radium',
      'react',
      'react-router'
    ]
  },
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ],
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: require.resolve('react'), loader: 'expose?React' }
      { test: require.resolve('radium'), loader: 'expose?Radium' }
    ]
  }
};
