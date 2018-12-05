const path = require('path');

module.exports = {
  entry: {
    main: ['./out/main.js'],
  },
  module: {},
  resolve: {},
  devtool: 'source-map',
  target: "node",
  externals: {
    'electron': 'require("electron")',
    'electron-config': 'require("electron-config")'
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
};