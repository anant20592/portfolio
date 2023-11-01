const path = require('path');
const pkg = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, `./dist/${pkg.version}`),
        filename: 'bundle.js',
        publicPath: 'http://localhost:9003/'
    },
    devServer: {
        port: 9003,
        historyApiFallback: true
    },
    resolve: {
        modules: [__dirname, "src","node_modules"],
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
    },
    module: {
        rules: [
          {
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader'
              }
            ]
          },
          {
            test: /\.(svg|jpg|png|gif|webp|)$/,
            type: 'asset/resource'
          },
          {
            test: /\.(scss|css)?$/,
            use: ["style-loader",
                {
                    loader: require.resolve("css-loader")
                },
                {
                    loader: require.resolve("sass-loader")
                }
            ]
          }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/index.html'),
      })]
}