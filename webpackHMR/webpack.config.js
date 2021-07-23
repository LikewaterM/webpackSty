const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintWebpackPlugin = require('eslint-webpack-plugin')

process.env.NODE_ENV = 'development'

module.exports = {
    entry: ['./index.js', './index.html'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build'),
        // publicPath: path.resolve(__dirname, 'build')
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader' // 样式兼容
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          publicPath: "../",
                        },
                    },
                    'css-loader',
                    'less-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name].[hash][ext]'
                }
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            },
            {
                test: /\.js$/, // js兼容
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                // 指定要兼容的浏览器版本
                                '@babel/preset-env',
                                {
                                    targets: {
                                        "ie": "7",
                                        "edge": "17",
                                        "firefox": "60",
                                        "chrome": "67",
                                        "safari": "11.1"
                                    },
                                    // 按需加载
                                    useBuiltIns: "usage",
                                    corejs: "3.15.1"
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            minify: { // html压缩
                collapseWhitespace: true, // 去除空格
                removeComments: true // 删除注释
            }
        }),
        new CssMinimizerWebpackPlugin(), // 压缩Css
        new MiniCssExtractPlugin({ // 提取css
            filename: 'css/[name].[hash:6].css'
        }),
        new ESLintWebpackPlugin({
            extensions: ['js','json'],
            exclude: 'node_modules',
            fix: true
        }),
        new webpack.HotModuleReplacementPlugin({
            // Options...
        })
    ],
    mode: process.env.NODE_ENV,
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        compress: true,
        port: 8081,
        open: true
    },
    target: 'web'
}