const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build')
    },
    module:{
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.ttf$/,
                type: 'asset/resource',
                generator: {
                    filename: 'font/[name].[hash:6].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    mode: 'development',
    // 使用devServer，需要安装webpack-dev-server
    // devServer 用来启动浏览器，进行热更新等
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        // 是否自动打开浏览器
        open: true,
        port: 8080,
        // 是否gzip压缩
        compress: true
    }
}