var path = require('path');

module.exports = {
  entry: './src/js/entry',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      // 如此即可
      // {
      //   test: /\.(css|less)$/,
      //   loaders: ['style', 'css', 'less']
      // },
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.less$/, loader: 'style!css!less'}
    ]
  }
}