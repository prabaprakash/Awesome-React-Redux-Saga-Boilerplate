const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
require("babel-polyfill");

module.exports = {
  entry: {
    js: ["babel-polyfill", "./src/client/index.js"]
  },
  output: {
    path: path.resolve("./src/dist/public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
};
