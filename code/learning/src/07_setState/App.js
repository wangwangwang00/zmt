import React, { PureComponent } from "react";
import { EventEmitter } from "events";

const eventBus = new EventEmitter();

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      msg: "",
    };
  }
  render() {
    const { msg } = this.state;
    return (
      <div>
        <h2>接受其他组件传来的消息：{msg}</h2>
      </div>
    );
  }
  componentDidMount() {
    eventBus.addListener("hello", this.reciveMsg.bind(this));
  }
  componentWillUnmount() {
    eventBus.removeListener("hello", this.reciveMsg.bind(this));
  }
  reciveMsg(args) {
    this.setState({
      msg: args,
    });
  }
}

class Banner extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button onClick={(e) => this.sendMsg()}>发送消息</button>
      </div>
    );
  }
  sendMsg() {
    eventBus.emit("hello", "你好呀");
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <Banner />
      </div>
    );
  }
}
