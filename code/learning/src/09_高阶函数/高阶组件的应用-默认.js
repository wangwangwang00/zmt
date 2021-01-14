import React, { PureComponent, createContext } from "react";

const userContext = new createContext({
  nickName: "Mounsey",
  level: -1,
  orgion: "中国",
});

//定义高级组件
function EnhanceProps(Component) {
  return (props) => {
    return <Component {...props} region="中国" />;
  };
}

class Home extends PureComponent {
  render() {
    return (
      <userContext.Consumer>
        {(value) => {
          return (
            <div>
              <h2>昵称：{value.nickName}</h2>
              <h2>等级:{value.level}</h2>
              <h2>区域：{value.region}</h2>
            </div>
          );
        }}
      </userContext.Consumer>
    );
  }
}

class About extends PureComponent {
  render() {
    return (
      <userContext.Consumer>
        {(value) => {
          return (
            <div>
              <h2>昵称：{value.nickName}</h2>
              <h2>等级:{value.level}</h2>
              <h2>区域：{value.region}</h2>
            </div>
          );
        }}
      </userContext.Consumer>
    );
  }
}

// const UserHome = (Home);
// const EnhanceAbout = EnhanceProps(About);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <userContext.Provider
          value={{ nickName: "Lily", level: 99, region: "中国" }}
        >
          <Home />
          <hr />
          <About />
        </userContext.Provider>
      </div>
    );
  }
}
