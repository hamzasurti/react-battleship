const path = require('path')
module.exports = {
  entry: "./components/app.js",
  output: {
    path: path.join(__dirname, 'client/'),
    filename: "bundle.js"
  },
  watch: true,
  module: {
  loaders: [
    {
      test: /\.es6$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }
  ]
},
resolve: {
  extensions: ['', '.js', '.es6']
},
}
