const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app/app.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: { 
          allowTsInNodeModules: true,
          configFile:  path.resolve(__dirname, 'tsconfig.webpack.json'),
        },
        // exclude: ['/node_modules']
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/app')
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  devServer: {
    port: 9000,
    contentBase: path.join(__dirname, 'dist'),
    index: 'index.html'
  }
};