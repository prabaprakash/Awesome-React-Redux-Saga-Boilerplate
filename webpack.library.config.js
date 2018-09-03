const path = require('path');
const webpack = require('webpack');
const BUILD_DIR = path.resolve(__dirname, 'src/dist/public');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  entry: {
    lib: [path.join(__dirname, 'config', 'library.js')],
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js',
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(BUILD_DIR, '[name]-manifest.json'),
      name: '[name]',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
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
  resolve: {
    modules: ['node_modules'],
  },
  performance: {
    hints: false,
  },
};
