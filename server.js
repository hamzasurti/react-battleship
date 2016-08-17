const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev.config');
const path = require('path');
const express = require('express');
const React = require('react');
const createStore = require('redux').createStore;
require('babel-core/register')({
    presets: ['es2015', 'react']
});
const Provider = require('react-redux').Provider;
const todoApp = require('./src/reducers').todoApp;
const App = require('./src/components/App').App;
const renderToString = require('react-dom/server').renderToString;
console.log('renderToString')

const app = express();

// This is fired every time the server side receives a request
app.use(handleRender);

// We are going to fill these out in the sections to follow
function handleRender(req, res) { 
    // Create a new Redux store instance
  const store = createStore(todoApp)

  // Render the component to a string
  const html = renderToString(
      React.createElement(
        Provider,
        { store: store },
        React.createElement(App, null)
      )
  )

  // Grab the initial state from our Redux store
  const preloadedState = store.getState()

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState))
 }
function renderFullPage(html, preloadedState) { 
    return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

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
  const indexPath = path.join(__dirname, './index.html');
  const publicPath = express.static(path.join(__dirname, './client'));

  app.use('/public', publicPath);
  app.get('/', function (_, res) { res.sendFile(indexPath); });
  app.listen(3000);
  console.log('Listening at port 3000');
}

