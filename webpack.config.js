
var path = require('path')
var webpack = require('webpack')

module.exports = {

  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './dev/entry.js'
  ],

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dev'),
    publicPath: '/dev'
  },

  module: {
    loaders: [
      { test: /(\.js$|\.jsx$)/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader'] }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

}

