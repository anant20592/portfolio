const path = require('path');
const pkg = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.tsx',
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
          }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/index.html'),
      })]
}