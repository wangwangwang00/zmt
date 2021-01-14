import React, { PureComponent, createContext } from "react";

const userContext = new createContext({
  nickName: "Mounsey",
  level: -1,
  orgion: "中国",
});

//定义高级组件
function EnhanceProps(Component) {
  return (props) => {
    return (
      <userContext.Consumer>
        {(value) => {
          return <Component {...value} {...props} />;
        }}
      </userContext.Consumer>
    );
  };
}

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>昵称：{this.props.nickName}</h2>
        <h2>等级:{this.props.level}</h2>
        <h2>区域：{this.props.region}</h2>
      </div>
    );
  }
}

class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>昵称：{this.props.nickName}</h2>
        <h2>等级:{this.props.level}</h2>
        <h2>区域：{this.props.region}</h2>
      </div>
    );
  }
}

const EnhanceHome = EnhanceProps(Home);
const EnhanceAbout = EnhanceProps(About);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <userContext.Provider
          value={{ nickName: "Lily", level: 99, region: "中国" }}
        >
          <EnhanceHome />
          <hr />
          <EnhanceAbout />
        </userContext.Provider>
      </div>
    );
  }
}
