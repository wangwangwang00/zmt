import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {
    constructor(props){
        super(props);
        this.titleRef = createRef()
        this.titleEle = null;
    }
    render() {
        return (
            <div>
                <h2 ref="title">hello React</h2>
                <h2 ref={this.titleRef}>hello React</h2>
                <h2 ref={args => this.titleEle = args}>hello React</h2>
                <button onClick={e => this.change()}>变</button>
            </div>
        )
    }
    change(){
        console.log(this.titleEle)
        this.refs.title.innerHTML = "hello JavaScript!"
        this.titleRef.current.innerHTML = "hello World!"
        this.titleEle.innerHTML = "hello TypeScript"
    }
}
