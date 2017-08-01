var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './src/entry.js'
  ],
  output: {
    path: __dirname + '/dist/',
    filename: 'birdieDS.js'
  },
  devServer: {
    hot: true,
    contentBase: __dirname + '/dist/',
  },
  module: {
      loaders: [
        {
          test: /\.less$/,
          loader: 'style-loader!css-loader!less-loader'  // use ! to chain loaders
        }
      ]
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ]
}
