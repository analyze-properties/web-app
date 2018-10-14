const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, opts) => {
  const {mode} = opts
  const config = {
    entry: {
      main: path.resolve(process.cwd(), 'src/main')
      // TODO: enabling this breaks HMR... why?
      // 'service-worker': path.resolve(process.cwd(), 'src/service-worker/main')
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
        },
        {
          test: /\.css$/,
          use: [
            opts.hot ? 'style-loader' : MiniCssExtractPlugin.loader,
            {loader: 'css-loader', options: {importLoaders: 1}},
            'postcss-loader'
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: opts.hot ? '[name].css' : '[name].[chunkhash].css'
      }),
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
