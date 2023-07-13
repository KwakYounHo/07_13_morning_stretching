const path = require('path')
const HWP = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './index.jsx'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        use: ["babel-loader"]
      },
      {
        test: [/\.css$/],
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  plugins: [
    new HWP({
      template: './index.html'
    })
  ],
  devServer: {
    port: 8080,
    hot: true
  }
}