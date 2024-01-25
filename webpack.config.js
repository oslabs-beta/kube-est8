const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, './client/public'),
    filename: 'bundle.js',
  },
  devServer: {
    port: '8080',
    static: ['./client/public'],
    open: true,
    hot: true,
    liveReload: true,

  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template.html',
    })
  ]
}