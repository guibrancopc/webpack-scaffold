/* 
* This is the Webpack development config version and requires the webpack.common.js to work
*/

const path = require('path');
const webpackCommon = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(webpackCommon, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/assets/images/favicon.png',
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // 3. Injects style into DOM with style tag
          'css-loader',   // 2. Turns css into common.js
          'sass-loader'   // 1. Turns sass into css
        ]
      }
    ]
  }
});
