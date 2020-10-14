const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    devtool: false,
    entry: './src/main.js',
    mode: "development",
    devServer: {
      port: 3001,
      contentBase: path.join(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          }
        ]
    },
    plugins: [
        // 请确保引入这个插件！
        new VueLoaderPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html')
        }),
        new ModuleFederationPlugin({
          name: "app2",
          remotes: {
            app1: "app1@http://localhost:3000/remoteEntry.js",
          }
        })
      ]
}