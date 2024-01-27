const path = require('path');
const pkg = require('./package.json');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devConfig = {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, `./dist/${pkg.version}`),
        filename: '[name].[contenthash].js',
        publicPath: `/${pkg.version}/`
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
        new CleanWebpackPlugin()
      ],
    module: {
        rules: [
            {
            test: /\.(scss|css)$/,
            use: [
                MiniCssExtractPlugin.loader, //3. Extract css into files
                'css-loader', //2. Turns css into commonJS
                {
                loader: "sass-loader", //1. Turns sass into css
                options: {
                    sassOptions: {
                    outputStyle: "expanded"
                    }
                }
                }
            ]
            }
        ]
    }
}

module.exports = devConfig;