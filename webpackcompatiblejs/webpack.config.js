const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintWebpackPlugin = require('eslint-webpack-plugin')
// const { ESLint } = require('eslint')

process.env.NODE_ENV = 'development'

module.exports = {
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
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
            template: './index.html'
        }),
        new ESLintWebpackPlugin({
            fix: true,
            extensions: ['js', 'json'],
            exclude: '/node_modules/'
        })
    ],
    mode: process.env.NODE_ENV
}