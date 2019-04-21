const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// var ManifestPlugin = require('webpack-manifest-plugin');

const webpack = require('webpack');


module.exports = {
//   entry: './src/index.js',
  entry:{
      app:'./src/index.ts',
      print:'./src/print.js',
      vendor: [
        'lodash',
        // 'react',
      ]
  },
  devtool: 'inline-source-map',
  output: {
      // filename: 'main.js',
      filename:'[name].bundle.js',
      chunkFilename:'[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
  },
//   mode:'production',
  mode:'development',
  // 热部署可以监听修改的页面  同时刷新浏览器
  devServer: {
    contentBase: './dist'
  },
  optimization:{
    splitChunks:{
      name: 'print'
    }
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: [
      // 可以将dist生成的文件清除避免缓存
      new CleanWebpackPlugin(),
      // 生成manifest文件，追踪文件打包路径
      // new ManifestPlugin(),
      // 这个可以把打包的js 自动引入到index.html入口文件里
      new HtmlWebpackPlugin({
        title: 'Webpack' // 主文件到标题
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'print' // 指定公共 bundle 的名称。
      // }),
      // new webpack.optimization.splitChunks({
      //   name:'vendor'
      // })
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'vendor'
      // }),
  ],
  module: {
    rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: [
            'style-loader',
            'css-loader'
            ]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
            'file-loader'
            ]
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
            'file-loader'
            ]
        }
    ]
  }
};