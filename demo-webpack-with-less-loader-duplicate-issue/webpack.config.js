var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './entry.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(css|less)$/,
        loader: ExtractTextPlugin.extract('style', '!css!less')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('all.css'),
    // new webpack.optimize.DedupePlugin()
  ]
}
