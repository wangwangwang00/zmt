import React, { PureComponent } from 'react'
import Home from '../home'
import Profile from '../profile'
import About from '../About';
export default class App extends PureComponent {
    render() {
        return (
            <div>
                <h2>App</h2>
                <Home/>

                <br/>
                <br/>
                <br/>
                <Profile/>
                <br/>
                <br/>
                <br/>
                <About/>
            </div>
        )
    }
}
