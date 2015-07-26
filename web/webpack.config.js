var
  path = require('path'),
  webpack = require('webpack');

module.exports = {
  entry: {
    app: './js/app',
    vendor: [
      'baconjs',
      'classnames',
      'jquery',
      'lodash',
      'radium',
      'react',
      'react-router',
      'svg.js'
    ]
  },
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      _: 'lodash',
      Bacon: 'baconjs',
      Radium: 'radium',
      SVG: 'svg.js'
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ],
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: require.resolve('react'), loader: 'expose?React' }
    ]
  }
};
