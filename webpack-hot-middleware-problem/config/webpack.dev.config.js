var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

function HelloPlugin(options) {

}

HelloPlugin.prototype.apply = function (compiler) {
  compiler.plugin('done', function () {
    console.log('Hello, World')
  })

  compiler.plugin('compilation', function (compilation) {
    console.log('compilation', compilation.assets)
  })
}

module.exports = {
  entry: {
    app: [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
      './entry.js'
    ],
    // vender: [
    //   'webpack/hot/dev-server',
    //   'webpack-hot-middleware/client',
    //   './vender.js'
    // ]
  },
  output: {
    path: '/',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.nd$/,
        loader: ExtractTextPlugin.extract('raw')
      },
      {
        test: /\.png$/,
        loader: ExtractTextPlugin.extract('file')
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.coffee$/,
        loader: ExtractTextPlugin.extract('coffee')
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Administrator!',
      filename: 'admin.html'
    }),
    new HtmlWebpackPlugin({
      template: './templates/foo.html',
      filename: 'bar.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'm.html',
      title: 'What the fuck',
      inject: false,

      template: require('html-webpack-template'),
      googleAnalytics: {
        trackingId: 'UA-XXXX-XX',
        pageViewOnLoad: true
      },
      chunks: ['vender']
    }),
    new HelloPlugin(),
    new ExtractTextPlugin('[name].vue')
  ]
}
