const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
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
    mode: 'development'
}