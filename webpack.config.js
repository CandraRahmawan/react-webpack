const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    app: './src/clients/Index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
      {test: /\.s?[c]ss$/, use: [MiniCssExtractPlugin.loader, 'css-loader']},
      {test: /\.png$/, use: 'file-loader'},
      {test: /\.txt$/, use: 'raw-loader'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'ReactJS with Webpack 4',
      favicon: './src/assets/favicon.ico',
      minify: true,
      meta: {
        description: 'build your assets using webpack 4',
        keyword: 'webpack 4, ReactJS'
      }
    }),
    new MiniCssExtractPlugin({
      filename: "styles.[hash].css"
    }),
    new MinifyPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  devServer: {
    port: 7000
  }
};