const webpack = require('webpack');
const webpackDevMiddleware = require ('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.dev.config.js')
const config = require('./webpack.dev.config');
const path = require('path');
const express = require('express');
const React = require('react');
const createStore = require('redux').createStore;
// todo:put in other file and move server to es6
require('babel-core/register')({
    presets: ['es2015', 'react']
});
const Provider = require('react-redux').Provider;
const todoApp = require('./src/reducers').default;
const App = require('./src/components/App').default;
const renderToString = require('react-dom/server').renderToString;

const app = express();

const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

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
        <title>Battleship</title>
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

delete process.env.BROWSER;

  app.listen(3000);
  console.log('Listening at port 3000');
