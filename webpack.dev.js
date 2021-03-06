/* eslint-disable import/no-extraneous-dependencies */
/*
* This is the Webpack development config version and requires the webpack.common.js to work
*/

const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');
const webpackCommon = require('./webpack.common');

module.exports = merge(webpackCommon, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/assets/images/favicon.png',
    }),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          cache: true,
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // 3. Injects style into DOM with style tag
          'css-loader', // 2. Turns css into common.js
          'sass-loader', // 1. Turns sass into css
        ],
      },
    ],
  },
});
