const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintWebpackPlugin = require('eslint-webpack-plugin')

process.env.NODE_ENV = 'development'

module.exports = {
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new ESLintWebpackPlugin({
            extensions: ['js', 'json'],
            exclude: '/node_modules/',
            fix: true
        })
    ],
    mode: process.env.NODE_ENV
}