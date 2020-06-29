const common = require('./webpack.common')
const merge = require('webpack-merge') // 利用webpack的merge插件合并选项，使用Object.assign会有全部覆盖问题
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    hot:true, // 开启热更新
  },
  devtool: 'cheap-module-eval-source-map', // 开启source map
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
})
