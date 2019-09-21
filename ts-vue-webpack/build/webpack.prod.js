const optimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const terserWebpackPlugin = require('terser-webpack-plugin')
module.exports = {
    mode: 'production',
    optimization: { //优化项
        minimizer: [ //放置压缩方案
            new optimizeCSSAssetsPlugin(),//用了这个css压缩 js也得手动压缩
            new terserWebpackPlugin()
        ]
    }
}