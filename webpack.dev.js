const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const webpack = require('webpack')

let server = {
    host: "localhost",
    port: 8111,
    contentBase: './dist',
    quiet: true,
    hot: true
}

module.exports = merge(common,{
  mode: 'development',
  devServer: server,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
            messages: [`Your application is running here: http://${server.host}:${server.port}`],
        }
    })
  ]
})