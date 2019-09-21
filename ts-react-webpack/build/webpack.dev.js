const path = require('path')
module.exports = {
    mode: 'development',
    devServer: {
        port: 3000,
        compress: true,//gzip 可以提升返回页面的速度
        contentBase: path.resolve(__dirname, '../dist')//webpack启动服务的时候会在dist目录下面
    }
}