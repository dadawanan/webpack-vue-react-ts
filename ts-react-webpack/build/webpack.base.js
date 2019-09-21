const dev = require('./webpack.dev')
const prod = require('./webpack.prod')
const merge = require('webpack-merge') //合并文件 不会把后面的配置覆盖前面的 而是合并成一个
const path = require('path')
const htmlwebpackplugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const minicCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = (env) => {
    let isDev = env.development
    const base = {
        entry: path.resolve(__dirname, '../src/index.tsx'),  //写入境都采用绝对路径
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: 'babel-loader'
                },
                {
                    test: /\.tsx$/,
                    use: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    use: [isDev ? 'style-loader' : minicCssExtractPlugin.loader, {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    }, 'postcss-loader', 'sass-loader']
                },
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                },
                {
                    test: /\.(woff|ttf|eot)$/,
                    use: 'file-loader'
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            name: 'image/[contentHash].[ext]',
                            limit: 1024
                        }
                    }, //默认的内容是拷贝的作用

                    //转base64会变大 不用发送http请求
                }
            ]
        },
        output: {//出口配置 
            filename: 'bundle.js',
            path: path.resolve(__dirname, '../dist')
        },
        plugins: [
            !isDev && new minicCssExtractPlugin({
                filename: 'css/main.css'
            }),
            !isDev && new CleanWebpackPlugin(),
            new htmlwebpackplugin({
                template: path.resolve(__dirname, '../public/index.html'),
                filename: 'index.html',
                minify: !isDev && {
                    removeAttributeQuotes: true, //去掉双引号
                    collapseInlineTagWhitespace: true //压缩成一行
                }
            })
        ].filter(Boolean)
    }
    if (isDev) {
        return merge(base, dev)  //原理：循环后面的配置定义到前面去
    } else {
        return merge(base, prod)
    }
}