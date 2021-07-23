const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 提取css到单独的文件中
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin') // 压缩css文件
const HtmlWebpackPlugin = require('html-webpack-plugin')

process.env.NODE_ENV = 'development'

module.exports = {
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: path.resolve(__dirname, 'build/')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(jpg|png|jpeg|gif)$/i,
                type: 'asset/resource',
                // parser: {
                //     dataUrlCondition: {
                //         maxSize: 10 * 1024
                //     }
                // },
                generator: {
                    filename: './imgs/[name].[hash:6][ext]'
                }
            },
            {
                test: /\.html$/i,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new CssMinimizerWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:6].css'
        }),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    mode: process.env.NODE_ENV
}