import webpack from 'webpack';
import path from 'path';
import { dirname } from 'path';

export default {
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.module\.css$/,
        use: [
          'style-loader', // CSS的HMR需要使用style-loader
          {
            loader: 'css-loader',
            options: {
              import: true,
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
              importLoaders: 1,
            },
          },
          // 'postcss-loader',
        ],
        include: /src/,
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.join(dirname(), 'dist'),
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' },
      },
      '/graphql': {
        target: 'http://localhost:4000',
      },
    },
  },
}
