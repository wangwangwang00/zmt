import React, { PureComponent } from 'react'
import styled from 'styled-components';

const InputStyle = styled.input.attrs({
    placeholder:"请输入",
    bColor:"red"
})`
    background-color:lightblue;
    border-color:${props => props.bColor};
    color:${props => props.color};
`
export default class Home extends PureComponent {
    constructor(props){
        super(props);
        this.state= {
            color:"red"
        }
    }

    render() {
        return (
            <div>
                <InputStyle type="text" color={this.state.color}/>
                <InputStyle type="password" />
                <h2>我是proFile的标题</h2>
                <ul>
                    <li>设置1</li>
                    <li>设置2</li>
                    <li>设置3</li>
                    <li>设置4</li>
                </ul>
            </div>
        )
    }
}
