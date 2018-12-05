const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/app/app.tsx'],
    notification: ['./src/app/notification.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: { 
          allowTsInNodeModules: true,
        },
      }, 
      {
        test: /\.scss$/,
        use: [
            "style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                  implementation: require("sass")
              }
            }
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    alias: {
      'nightwing-react': '../nightwing-react/src',
      'nightwing-core': '../nightwing-core/src',
    }
  },
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/app')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'app.html',
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      filename: 'notification.html',
      chunks: ['notification']
    })
  ],
  devServer: {
    port: 9000,
    contentBase: path.join(__dirname, 'dist/app'),
    index: 'app.html'
  }
};