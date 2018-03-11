const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const webpackConfig = merge(baseWebpackConfig, {
  entry: {
    'loading': path.resolve(__dirname, '../src/components/loading/index.js'),
    'message': path.resolve(__dirname, '../src/components/message/index.js'),
    'loadMore': path.resolve(__dirname, '../src/components/loadMore/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name]/index.js'
  }
})

module.exports = webpackConfig
