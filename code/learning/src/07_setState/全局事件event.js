import React, { PureComponent } from 'react'
import {EventEmitter} from 'events'

const eventBus = new EventEmitter()

class Home extends PureComponent{
    render(){
        return(
            <div>
                Home
            </div>
        )
    }
    //事件监听
    componentDidMount(){
        eventBus.addListener('hello',this.handEvent)
    }
    //取消事件监听
    componentWillUnmount(){
        eventBus.removeListener('hello',this.handEvent)
    }

    handEvent(args,args2){
        console.log(args,args2)
    }
}

class Profile extends PureComponent{
    render(){
        return(
            <div>
                <button onClick={e => this.emitEvent()}>点击</button>
            </div>
        )
    }
    emitEvent(){
        eventBus.emit('hello',"123","678")
    }
}

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <Home/>
                <br/>
                <hr/>
                <br/>
                <Profile/>
            </div>
        )
    }
}
