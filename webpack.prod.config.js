const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: [
    './src/index.js',
  ],

  output: {
    path: path.join(__dirname, 'client/'),
    filename: 'bundle.js',
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
  ],

  module: {
    loaders: [
      { test: /\.js?$/,
        loader: 'babel',
        exclude: /node_modules/ },
      { test: /\.png$/,
        loader: 'file' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file' },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.es6'],
  },
};
