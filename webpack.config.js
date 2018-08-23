const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
require('babel-polyfill');

const BUILD_DIR = path.resolve(__dirname, 'src/dist/public');
const APP_DIR = path.resolve(__dirname, 'src/client');
module.exports = {
  cache: true,
  entry: {
    js: ['babel-polyfill', APP_DIR + '/index.js'],
  },
  output: {
    path: path.resolve('./src/dist/public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
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
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.DllReferencePlugin({
      manifest: require(path.join(BUILD_DIR, 'lib-manifest.json')),
      extensions: ['.js', '.jsx'],
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
};
