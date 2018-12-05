const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app.tsx',
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
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    index: 'index.html'
  }
};