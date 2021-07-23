// 用于配置webpack
const path = require('path')
module.exports = {
    // 打包入口文件
    entry: './index.js',
    // 打包后输出文件及路径
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build')
    },
    // loader配置
    module: {
        rules: [
            {
                test: /\.css$/i,
                // loader执行顺序是从右到左，从下到上，一次执行
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },{
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [],
    mode: 'development'
}