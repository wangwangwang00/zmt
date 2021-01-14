import React, { Component } from "react";
/**
 * 1、创建context对象
 *
 *
 */

const UserContext = React.createContext({
  nickname: "Mary",
  level: 77,
});

function ProFileHeader(props) {
  return (
    <UserContext.Consumer>
      {(value) => {
        return (
          <div>
            <h2>用户昵称：{value.nickname}</h2>
            <h2>用户等级：{value.level}</h2>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}

function ProFile(props) {
  return (
    <div>
      <ProFileHeader />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: "John",
      level: 99,
    };
  }
  render() {
    const { nickname, level } = this.state;
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <ProFile />
        </UserContext.Provider>
      </div>
    );
  }
}
