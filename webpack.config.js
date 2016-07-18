
const webpack = require('webpack')
const path =  require('path')
const merge = require('ramda').merge

const env = process.env.NODE_ENV || 'development';

module.exports = {
  context: path.join(__dirname, './client'),
  node: { fs: 'empty' },
  entry: merge({
      jsx: './index.js',
      vendor: ['react']
    },
    env === 'development' ? { html: './index.html' } : {}
  ),
  output: {
    path: path.join(__dirname, './static'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel-loader'
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      path.resolve('node_modules'),
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(env) }})
  ],
  devServer: {
    contentBase: './client',
    hot: true
  }
}
