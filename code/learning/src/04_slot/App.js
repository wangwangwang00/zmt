import React, { Component } from 'react'
import NavBar from './NavBar';
import NavBar2 from './NavBar2';
export default class App extends Component {
    render() {
        return (
            <div>
                <NavBar>
                    <span>aaaa</span>
                    <strong>bbb</strong>
                    <em>333</em>
                </NavBar>
                <NavBar2 leftSlot={<span>aaaa</span>} centerSlot={<strong>bbb</strong>} rightSlot={<em>333</em>}/>

                
            </div>
        )
    }
}
