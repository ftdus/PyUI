const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config');

const isProd = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV === 'development';

const webpackConfig = {
  entry: './website/main.js',
  output: {
    filename: '[name].[hash:7].js',
    chunkFilename: isProd ? '[name].[hash:7].js' : '[name].js',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: config.alias,
    modules: ['node_modules'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './website/index.html',
      filename: './index.html',
      favicon: './public/favicon.ico',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      vue: {
        preserveWhitespace: false,
      },
    }),
  ],
};

module.exports = webpackConfig;
