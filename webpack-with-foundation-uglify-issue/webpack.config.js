var path = require('path')
var webpack = require('webpack')

var config = {
  entry: path.join(__dirname, 'src', 'main'),
  output: {
    path: path.join(__dirname),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        /**
         * 當 Fundation/Bootstrap 這類框架的原始碼使用了 jquery 時會自動在其
         * 原始碼檔案引用 jquery
         */
        test: require.resolve('jquery'),
        loader: 'imports?jQuery=jquery,$=jquery,this=>window'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: path.posix.join(__dirname, 'public/images', '[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: path.posix.join(__dirname, 'public/fonts', '[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.scss', 'css', '.json']
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    /**
     * 重複刪除
     */
    new webpack.optimize.DedupePlugin(),
    /**
     * Uglify
     */
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: true
    //   }
    // })
  ]
}

module.exports = config
