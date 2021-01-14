import React, { Component } from 'react'

class Cpn extends Component{
    render(){
        return(
            <div>我是cpn</div>
        )
    }
    componentWillUnmount(){
        console.log("移除cpn")
    }
}

export default class App extends Component {
    constructor(){
        super();
        console.log('我是constructor')
        this.state={
            counter:0,
            isShow:true
        }
    }
    render() {
        console.log("render")
        return (
            <div>
                <h2>{this.state.counter}</h2>
                <button onClick={e => {this.increment()}}>+1</button>
                <hr/>
                <button onClick={e => {this.change()}}>切换</button>
                {this.state.isShow &&   <Cpn />}
               
            </div>
        )
    }
    increment(){
        this.setState({
            counter:this.state.counter + 1
        })
    }
    change(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    componentDidUpdate(previousProps,prevState,snapshot){
        //snapshot返回的东西
        console.log("componentDidUpdate");
    }

}
