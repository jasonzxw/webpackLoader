const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    entry:{
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[contenthash].[name].bundle.js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: './src/loader/consoleLoader',
                options: {
                    author: 'hello loader',
                    email: 'helloloader@qq.com'
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}