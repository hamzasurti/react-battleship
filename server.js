const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev.config');
const path = require('path');
const express = require('express');

if (process.env.NODE_ENV !== 'production') {
  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
  }).listen(3000, 'localhost', (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('Listening at http://localhost:3000/');
  });
} else {
  const app = express();
  const indexPath = path.join(__dirname, './index.html');
  const publicPath = express.static(path.join(__dirname, './client'));

  app.use('/public', publicPath);
  app.get('/', function (_, res) { res.sendFile(indexPath); });
  app.listen(3000);
  console.log('Listening at port 3000');
}

