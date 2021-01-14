import React, { Component } from 'react'

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            friends:[
                {name:'lily',age:13},
                {name:'John',age:23},
                {name:'hanmeimei',age:16},
            ]
        }
    }
    render() {
        const {friends} = this.state;
        return (
            <div>
                <h2>朋友列表</h2>
                <ul>
                    {
                        friends.map((item,index) => {
                        return (<li key={item.name}>
                                姓名：{item.name}   
                                年龄：{item.age}
                                
                                <button onClick={e => this.addAge(index)}>年龄+1</button>
                            </li>)
                        })
                    }
                </ul>
                <button onClick={(e) => this.insertData()}>添加数据</button>
            </div>
        )
    }
    insertData(){
        // 不可做
        // const newData = {name:'Sally',age:78}
        // this.state.friends.push(newData);
        
        // this.setState({
        //     friends:this.state.friends
        // })
        // console.log(this.state.friends);

        //方法1
        const newFriends = [...this.state.friends];
        newFriends.push({name:'Sally',age:78});
        this.setState({
            friends:newFriends
        })

    }
    addAge(index){
        const newFriends = [...this.state.friends];
        newFriends[index].age += 1;
        this.setState({
            friends:newFriends
        })


        // this.state.friends[index].age += 1;
        // this.setState({
        //     friends:this.state.friends
        // })
    }
    shouldComponentUpdate(newProps,newStates){
        if(this.state.friends !== newStates.friends){
            return true;
        }
        return false;
    }
}
