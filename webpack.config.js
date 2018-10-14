const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, opts) => {
  const {mode} = opts
  const config = {
    entry: {
      main: path.resolve(process.cwd(), 'src/main')
    },
    output: {
      path: path.resolve(process.cwd(), 'dist'),
      filename: mode === 'production' ? '[name].js' : '[name].[chunkhash].js'
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
        minify: true
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
