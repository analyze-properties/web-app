const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, opts) => {
  const {mode} = opts
  const config = {
    entry: {
      main: path.resolve(process.cwd(), 'src/main'),
      'service-worker': path.resolve(process.cwd(), 'src/service-worker/main')
    },
    output: {
      publicPath: '/',
      path: path.resolve(process.cwd(), 'dist'),
      filename: ({chunk}) => {
        return chunk.name === 'service-worker'
          ? '[name].js'
          : '[name].[chunkhash].js'
      }
    },
    devServer: {
      port: 3000,
      contentBase: path.join(process.cwd(), 'public'),
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.(mjs|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              configFile: path.resolve(process.cwd(), '.babelrc')
            }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(process.cwd(), 'src/index.html'),
        minify: {
          collapseWhitespace: true
        }
      })
    ]
  }
  if (opts.hot) {
    config.output.filename = '[name].js'
    config.devServer.hot = true
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
  }
  return config
}
