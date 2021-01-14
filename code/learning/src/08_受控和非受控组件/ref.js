import React, { PureComponent,createRef } from 'react'

class Counter extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            counter : 0
        }
    }
    render(){
        return(
            <div>
                <h2>当前计数：{this.state.counter}</h2>
                <button onClick={e=>this.increment()}>+1</button>
            </div>
        )

    }
    increment(){
        this.setState({
            counter:this.state.counter+1
        })
    }
}

export default class App extends PureComponent {
    constructor(props){
        super(props);
        this.titleRef = createRef()
        this.ChildRef = createRef()
        this.titleEle = null;
    }
    render() {
        return (
            <div>
                <h2 ref="title">hello React</h2>
                <h2 ref={this.titleRef}>hello React</h2>
                <h2 ref={args => this.titleEle = args }>hello React</h2>
                <button onClick={e => {this.click()}}>click</button>

                <hr/>
                <Counter ref={this.ChildRef} />
                <button onClick={e => this.appIncrement()}>App</button>
            </div>
        )
    }
    click(){
        this.refs.title.innerHTML = "hello World"
      
        this.titleRef.current.innerHTML = "hello Vue"

        this.titleEle.innerHTML = "hello Java"
    }
    appIncrement(){
        this.ChildRef.current.increment()
        console.log(this.ChildRef.current)
    }
}
