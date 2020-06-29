// 公共的webpack配置
const path = require('path'); 
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /.png$/, // 编译图片文件
        use: {
          loader: 'url-loader',
          options: { 
            limit: '10240' // 10k以下使用url-loader处理为base64
          }
        }
      },
      { // 处理css类文件
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          },
          'sass-loader',
          'postcss-loader' // 为css3添加前缀
        ]
      },
      {
        test: /.js/, // 处理ES5
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', { modules:false }]
          }
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin()
  ],
}
