import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    render() {
        const pStyle = {
            color:"blue"
        }
        return (
            <div>
                <h2 style={{fontSize:'20px',color:'red'}}>我是标题</h2>
                <p style={pStyle}>p标签</p>
                app
            </div>
        )
    }
}
