const webpack = require('webpack');

const data = {
    entry: './src/index.js',
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.(s*)css$/,
            use: ['style-loader', 'css-loader']
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './dist',
      hot: true
    }
  };

  if (process.env.NODE_ENV !== 'production') {
    data.plugins = [
      new webpack.HotModuleReplacementPlugin()
    ];
  }
module.exports = data;