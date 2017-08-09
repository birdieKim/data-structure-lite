var webpack = require('webpack');
var path = require('path');

switch (process.env.npm_lifecycle_event) {
  case 'prod':
    module.exports = {
      entry: [
        './src/entry.js'
      ],
      output: {
        path: __dirname + '/dist/',
        filename: 'birdieDS.js'
      }
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
      plugins: [ new webpack.HotModuleReplacementPlugin() ]
    };
    break;
}













// module.exports = {
//   entry: [
//     './src/entry.js'
//   ],
//   output: {
//     path: __dirname + '/dist/',
//     filename: 'birdieDS.js'
//   },
//   devServer: {
//     hot: true,
//     contentBase: __dirname + '/dist/',
//   },
//   module: {
//       loaders: [
//         {
//           test: /\.less$/,
//           loader: 'style-loader!css-loader!less-loader'  // use ! to chain loaders
//         }
//       ]
//   },
//   plugins: [ new webpack.HotModuleReplacementPlugin() ]
// }
