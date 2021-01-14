import React, { Component } from 'react'

import PropTypes from 'prop-types'


function ChildCpn(props) {
    const { name, age, hobby } = props;
    return (
        <div>
            <div>
                <p>姓名：{name}</p>
                <p>年龄：{age}</p>
                <ul>
                    {
                        hobby.map((item) => {
                            return <li>{item}</li>
                        })
                    }
                </ul>
            </div>
            
        </div>
    )
}

class ChildCpn2 extends Component{
    //类组件属性验证方法一：
    static propTypes = {

    }
    static defaultProps = {
        
    }
}
//类组件属性验证方法二：
ChildCpn2.propTypes = {

}

ChildCpn.propTypes = {
    //name属性为字符串，且必传
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    hobby: PropTypes.array
}
//给子组件设置默认属性
ChildCpn.defaultProps = {
    name:'Lily',
    age:30,
    hobby:["222","444"]
}
export default class componentName extends Component {
    render() {
        return (
            <div>
                <ChildCpn name="John" age={18} hobby={["acv", "set", "tgh"]} />
                <br/>
                <hr />
               
                <ChildCpn />
            </div>
        )
    }
}
