const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './index',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: [
                    // 'style-loader',  // 提取css，这句代码就不要了
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:6].css'
        })
    ],
    mode: 'development'
}