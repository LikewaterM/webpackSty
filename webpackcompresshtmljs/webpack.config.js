const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintWebpackPlugin = require('eslint-webpack-plugin')

process.env.NODE_ENV = 'production' // js代码压缩，只需要将mode设置为生产模式

module.exports = {
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: true, // 去除空格
                removeComments: true // 删除注释
            }
        }),
        new ESLintWebpackPlugin({
            fix: true,
            extensions: ['js', 'json'],
            exclude: '/node_modules/'
        })
    ],
    mode: process.env.NODE_ENV
}