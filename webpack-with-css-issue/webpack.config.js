module.exports = {
  entry: './src/main.js',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loaders: ['url?limit=8192&name=image/[name].[ext]']
      }
    ]
  }
}
