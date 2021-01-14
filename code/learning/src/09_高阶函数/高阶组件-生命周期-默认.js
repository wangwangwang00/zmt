import React, { PureComponent } from 'react'

function getRenderTime(Component){
    return class RenderTime extends PureComponent{
        render(){
            return(
                <Component />
            )
        }
        UNSAFE_componentWillMount(){
            this.startTime = new Date()
        }
        componentDidMount(){
            this.endeTime = new Date()
            const renderTime = this.endeTime - this.startTime;
            console.log(`${Component.name}渲染时间`,renderTime)
        }
    }
}



//登录页
class Home extends PureComponent{
    render(){
        return(
            <div>
                <h2>Home</h2>
            </div>
        )
    }
    

}

class About extends PureComponent{
    render(){
        return(
            <div>
                <h2>About</h2>
            </div>
        )
    }
}

const RenderHome = getRenderTime(Home)
const RenderAbout = getRenderTime(About)

export default class App extends PureComponent {
    render() {
        return (
            <div>
               <RenderHome/>
               <RenderAbout/>
            </div>
        )
    }
}
