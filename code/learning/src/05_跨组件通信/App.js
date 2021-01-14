import React, { Component } from 'react'
function ProFileHeader(props){
    return(
        <div>
            <h2>用户昵称：{props.nickname}</h2>
            <h2>用户等级：{props.level}</h2>
        </div>
    )
}
function ProFile(props){
    return (
        <div>
            {/* {方法一} */}
                    {/* <ProFileHeader nickname={props.nickname} level={props.level}/> */}
            {/* {方法二} {...props} */}
                <ProFileHeader {...props}/>
           <ul>
               <li>设置1</li>
               <li>设置2</li>
               <li>设置3</li>
               <li>设置4</li>
           </ul>

        </div>
    )
}

export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            nickname:'John',
            level:99
        }
    }
    render() {
        // const {nickname,level} = this.state;
        return (
            <div>
                {/* <ProFile nickname={nickname} level={level}/> */}
                <ProFile {...this.state}/>
            </div>
        )
    }
}
