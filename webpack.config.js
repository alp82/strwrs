const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const HtmlWebPackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: __dirname,

  devtool: debug ? 'inline-sourcemap' : null,

  devServer: {
    publicPath: '/dist',
    contentBase: __dirname + '/static',
    hot: true,
    historyApiFallback: true,
    overlay: true,
  },

  output: {
    // publicPath: '/dist',
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  entry: './src/index.js',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          // MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|png)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          // options: {
          //   name: '[name].[ext]',
          //   outputPath: 'fonts/'
          // }
        }]
      }
    ]
  },

  plugins: debug ? [
    // new HtmlWebPackPlugin({
    //   template: './src/index.html',
    //   filename: './static/index.html'
    // }),
    // new MiniCssExtractPlugin({
    //   // filename: '[name].css',
    //   // chunkFilename: '[id].css'
    // })
  ] : [
    new CleanWebpackPlugin('dist', {} ),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};