//webpack 是基于node.js 语法common js规范
//默认导出的是配置对象
// const path = require('path')
// module.exports = {
//     mode: 'development',//当前是开发模式
//     //入口 出口
//     entry: path.resolve(__dirname, './src/index.js'),  //写入境都采用绝对路径
//     output: {//出口配置 
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist')
//     }
// }

//一般情况下 我们分成两个模式 一个是开发模式 一个是生产模式
module.exports = (env) => {
    console.log(env)
}