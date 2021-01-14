import React, { PureComponent } from "react";

//定义高级组件
function EnhanceProps(Component) {
  return (props) => {

     return <Component {...props} region="中国" />;
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
        <EnhanceHome nickName="John" level={24}/>
        <EnhanceAbout nickName="Lilei" level ={23}/>
        app
      </div>
    );
  }
}


