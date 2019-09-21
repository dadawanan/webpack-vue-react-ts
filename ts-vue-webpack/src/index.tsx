//webpack默认支持模块对象 common.js
//es6规范

//把这个模块打包 解析出浏览器可以识别的代码
// import './index.css'
// import './index.scss'
// let result = require('./a-module')
// console.log(result)

//可以使用webpack webpack-cli 0配置的方式来打包
//--save-dev 表示只会安装在开发环境nodemodules目录下

//npx命令来执行webpack npm5.2之后出来的 它会帮我们执行开发环境下的bin目录下的文件 npx webpack
//流程：webpack会去找webpack-cli 会靠yargs模块解析用户参数 解析完后会再去找webpack打包

//两个模式开发模式 生产模式 默认传入 --mode

//我要实现es6转化为es5
// const fn = () => {
//     console.log(1)
// }
// fn()

// import React from 'react'
// import ReactDom from 'react-dom'
// interface IProps {
//     num: number
// }
// let initState = { count: 0 }
// type State = Readonly<typeof initState>
// class Counter extends React.Component<IProps, State>{
//     state: State = initState
//     handleClick = () => {
//         this.setState({ count: this.state.count + 1 })
//     }
//     render() {
//         return <div>
//             {this.state.count}
//             <button onClick={this.handleClick}>点击</button>
//         </div>
//     }
// }
// ReactDom.render(<Counter num={1}></Counter>, document.getElementById("app"))
//1实现 ts-loader typescript
//2babel7 @babel/preset-typescript