const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: './images/[name].[ext]',
        },
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=./fonts/[name].[ext]',
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),

    new CopyWebpackPlugin([
      { from: 'src/assets', to: '' },
    ]),

    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    contentBase: './public',
    port: 5500,
  },
};
