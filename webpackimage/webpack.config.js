const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build'),
        // 该属性用于设置使用asset方式打包后，资源存放的位置
        // 但是该属性会导致所有的资源打包后都放在一个文件夹下面，所以不推荐使用
        // assetModuleFilename: 'imgs/[name].[hash:6].[ext]'
    },
    module:{
        rules:[
            {
                test: /\.less$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            // 一般的资源（图片，文本等）打包处理，在webpack5之后使用asset方式
            {
                test: /\.(png|jpg|gif)$/i,
                type: 'asset/resource',
                // generator属性为每个使用asset方式打包的资源配置打包之后的存放路径
                generator: {
                    filename: 'imgs/[name].[hash:6].[ext]'
                }
            },
            // 但对于html文件中标签元素引入的图片，还需要使用html-loader来进行打包处理
            {
                test: /\.html$/i,
                loader: 'html-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    mode: 'development'
}