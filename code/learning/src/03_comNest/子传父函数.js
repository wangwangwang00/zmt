import React, { Component } from 'react'

class ChildCpn extends Component{
   
    
    render(){
        const {increment} = this.props;
        return(
            <button onClick =  {increment}> 子组件+1 </button>
        )
    }
    
}

export default class componentName extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter:0
        }
    }

    render() {
        return (
            <div>
                <h2>当前计数：{this.state.counter}</h2>
                <button onClick={e => {this.increment()}}>+1</button>
                {/**绑定this */}
                <ChildCpn increment={this.increment.bind(this)}/>
            </div>
        )
    }
    increment(){
        console.log('increment')
        this.setState({
            counter:this.state.counter+1
        })
    }
}
