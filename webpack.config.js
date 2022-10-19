const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExptractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          miniCssExptractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  plugins: [
    new miniCssExptractPlugin({
      filename: '[main].css',
      chunkFilename: '[id].css'
    }),
    new htmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
}