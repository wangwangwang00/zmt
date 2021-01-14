import React, { Component } from "react";
const UserContext = React.createContext({
  name: "John",
  age: 17,
});

const ThemeContext = React.createContext({
  color: "red",
});

function ProFileHeader() {
  return (
    <UserContext.Consumer>
      {(value) => {
        return (
          <ThemeContext.Consumer>
            {(theme) => {
              return (
                <div>
                  <h2>用户昵称：{value.name}</h2>
                  <h2>用户等级：{value.age}</h2>
                  <h2 style={{ color: theme.color }}>颜色:{theme.color}</h2>
                </div>
              );
            }}
          </ThemeContext.Consumer>
        );
      }}
    </UserContext.Consumer>
  );
}

function ProFile() {
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

export default class Context3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mary",
      age: 89,
    };
  }
  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <ThemeContext.Provider value={{ color: "blue" }}>
            <ProFile />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    );
  }
}
