//为什么使用SetState
import React, { Component } from 'react'

export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            message:'hello world'
        }
    }
    render() { 
        const {message} = this.state;
        return (
            <div>
                <h2>信息展示:{message}</h2>
                <button onClick={e=>{this.change()}}>改变文本</button>
            </div>
        )
    }
    change(){
        // this.setState({
        //     message:'hello React'
        // })
        // console.log(this.state.message)


        // 方式一：获取异步更新后的数据（回调函数）
        this.setState({
            message:'hello React'
        },() => {
            console.log(this.state.message)
        })
    }
    // 方式二：获取异步更新后的数据（componentDidUpdate）
    componentDidUpdate(){
        console.log(this.state.message)
    }
}
