import React, { Component } from 'react'

class ChildCpn extends Component{
    //不使用constructor 也能直接使用props
    // constructor(props){
    //     super();
    //     console.log(props)
    //     this.props = props;
    // }
    render(){
        return(
            <div>
                <h2>展示父组件数据:</h2>
                <h3>年龄：{this.props.age}</h3>
                <h3>姓名:{this.props.name}</h3>
            </div>
            
        )
           
    }

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
