const path = require('path');
const webpack = require('webpack');

const devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false')),
});

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'client/'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    devFlagPlugin,
  ],
  devtool: 'source-map',
  watch: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.es6'],
  },
};
