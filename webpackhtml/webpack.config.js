const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build')
    },
    module:{},
    plugins:[
        new HtmlWebpackPlugin({
            // filename: 'xxx.html' // 打包后的文件名，默认是index.html
            template: './index.html', // 模板
            // title: 'hello webpack' // 此属性，与template属性同时使用时无效
        })
    ],
    mode:'development'
}