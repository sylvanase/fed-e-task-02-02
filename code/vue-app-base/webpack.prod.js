const common = require('./webpack.common')
const path = require('path')
const merge = require('webpack-merge') // 利用webpack的merge插件合并选项，使用Object.assign会有全部覆盖问题
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name]-[chunkhash:8].bundle.js',
    path: path.join(__dirname, 'dist')
  },
  optimization: {
    usedExports: true,
    minimize: true,
    concatenateModules: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]_[hash].css',
      chunkFilename: '[id]_[hash].css'
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    new UglifyJsPlugin({
      cache: true
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public', to: 'public'
        }
      ]
    })
  ]
})
