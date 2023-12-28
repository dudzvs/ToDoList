const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './app/js/index.js',
  devtool: 'inline-source-map',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: './',
    assetModuleFilename: './images/[name][ext][query]',
    clean: true,
  },

  plugins: [
    new htmlWebpackPlugin({
      favicon: './assets/images/favicon-32x32.png',
      hash: true,
      template: './app/index.html',
      filename: './index.html', //relative to root of the application
      inject: 'head',
      scriptLoading: 'defer',
    }),
  ],  

  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],

      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
}