var webpack = require('webpack');
var path = require('path');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

switch (process.env.npm_lifecycle_event) {
  case 'prod':
    module.exports = {
      entry: [
        './data-structure-lite.js'
      ],
      output: {
        path: __dirname + '/dist/',
        filename: 'data-structure-lite.min.js'
      },
      plugins: [
        new UglifyJSPlugin()
      ]
    };
    break;
  case 'test':
    module.exports = {
      entry: [
        './test/test.js'
      ],
      output: {
        path: __dirname + '/dist/test/',
        filename: 'index.js'
      },
      devServer: {
        hot: true,
        contentBase: __dirname + '/dist/test/',
      },
      module: {
          loaders: [
            {
              test: /\.css$/,
              loader: 'style-loader!css-loader'  // use ! to chain loaders
            }
          ]
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin()
      ]
    };
    break;
}
