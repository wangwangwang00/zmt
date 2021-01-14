//为什么使用SetState
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello world",
      name: "John",
    };
  }
  render() {
    const { message, name } = this.state;
    return (
      <div>
        <h2>信息展示:{message}</h2>
        <h2>{name}</h2>
        <button
          onClick={(e) => {
            this.change();
          }}>
          改变文本
        </button>
        <button id="btn">改变文本2</button>
      </div>
    );
  }
  change() {
    setTimeout(() => {
      this.setState({
        message: "hello React",
      });
      console.log(this.state.message);
    }, 0);
    
  }
  componentDidMount() {
    document.getElementById("btn").addEventListener("click", () => {
      this.setState({
        message: "hello React",
      });
      console.log(this.state.message);
    });
  }
 
}
