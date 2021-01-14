import React, { Component } from 'react'

function ChildCpn (props){
    const {name,age} = props;
    return(
        <div>
            <h2>姓名{name}</h2>
        </div>
    )
}

export default class componentName extends Component {
    render() {
        return (
            <div>
                <ChildCpn name="John" age="18" />
                <ChildCpn name="Mary" age="38" />
            </div>
        )
    }
}
