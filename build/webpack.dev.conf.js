const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf.js')
const config = require('../config/config');

const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackConfig = config.webpackConfig;

module.exports = merge(baseConfig, {
  entry: webpackConfig.entry,  //'./src/vue-router.js',
  output: {
    filename: webpackConfig.output.filename//'ver-router.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, webpackConfig.htmlTemplate)//'../src/vue-router.template.html')
    })
  ],
  devServer: {
    port: 9000,
    // host: '192.168.1.51',
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    publicPath: '/',
    // contentBase: path.join(__dirname, './dist'),
    hot: true
  }
})
