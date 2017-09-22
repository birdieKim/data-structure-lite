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
  case 'prod_queue':
    module.exports = {
      entry: [
        './queue.js'
      ],
      output: {
        path: __dirname + '/dist/',
        filename: 'queue.min.js'
      },
      plugins: [
        new UglifyJSPlugin()
      ]
    };
    break;
  case 'prod_priorityQueue':
    module.exports = {
      entry: [
        './priorityQueue.js'
      ],
      output: {
        path: __dirname + '/dist/',
        filename: 'priorityQueue.min.js'
      },
      plugins: [
        new UglifyJSPlugin()
      ]
    };
    break;
  case 'prod_stack':
    module.exports = {
      entry: [
        './stack.js'
      ],
      output: {
        path: __dirname + '/dist/',
        filename: 'stack.min.js'
      },
      plugins: [
        new UglifyJSPlugin()
      ]
    };
    break;
  case 'prod_linkedList':
    module.exports = {
      entry: [
        './linkedList.js'
      ],
      output: {
        path: __dirname + '/dist/',
        filename: 'linkedList.min.js'
      },
      plugins: [
        new UglifyJSPlugin()
      ]
    };
    break;
  case 'prod_doublyLinkedList':
    module.exports = {
      entry: [
        './doublyLinkedList.js'
      ],
      output: {
        path: __dirname + '/dist/',
        filename: 'doublyLinkedList.min.js'
      },
      plugins: [
        new UglifyJSPlugin()
      ]
    };
    break;
  case 'prod_tree':
    module.exports = {
      entry: [
        './tree.js'
      ],
      output: {
        path: __dirname + '/dist/',
        filename: 'tree.min.js'
      },
      plugins: [
        new UglifyJSPlugin()
      ]
    };
    break;
  case 'prod_binarySearchTree':
    module.exports = {
      entry: [
        './binarySearchTree.js'
      ],
      output: {
        path: __dirname + '/dist/',
        filename: 'binarySearchTree.min.js'
      },
      plugins: [
        new UglifyJSPlugin()
      ]
    };
    break;
  case 'prod_heap':
    module.exports = {
      entry: [
        './heap.js'
      ],
      output: {
        path: __dirname + '/dist/',
        filename: 'heap.min.js'
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
