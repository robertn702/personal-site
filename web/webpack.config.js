var
  path = require('path'),
  webpack = require('webpack');

module.exports = {
  entry: {
    app: './js/app',
    vendor: [
      'baconjs',
      'classnames',
      'd3',
      'jquery',
      'lodash',
      'radium',
      'react',
      'react-router',
      'svg.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'js'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      _: 'lodash',
      Bacon: 'baconjs',
      d3: 'd3',
      Radium: 'radium',
      SVG: 'svg.js'
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ],
  resolve: {
    modulesDirectories: [
      './js/actions',
      './js/stores',
      'bower_components',
      'node_modules'
    ],
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: require.resolve('react'), loader: 'expose?React' }
    ]
  }
};
