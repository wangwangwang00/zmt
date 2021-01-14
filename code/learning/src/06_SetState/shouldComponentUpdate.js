import React, { Component } from "react";
//header
class Header extends Component {
  render() {
    return (
      <div>
        <h2>Header</h2>
      </div>
    );
  }
}
//main
class Banner extends Component {
  render() {
    console.log("banner");
    return <div>Banner</div>;
  }
}

class ProList extends Component {
  render() {
    console.log("ProList");
    return (
      <ul>
        <li>1111</li>
        <li>222</li>
        <li>333</li>
        <li>4444</li>
      </ul>
    );
  }
}
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: "hello world",
    };
  }
  render() {
    console.log("Main");
    const { counter } = this.state;
    return (
      <div>
        <Banner />
        <ProList />
        <h2>当前计数：{counter}</h2>
        <h2>{this.state.message}</h2>
        <button
          onClick={(e) => {
            this.increment();
          }}
        >
          +1
        </button>
        <button
          onClick={(e) => {
            this.change();
          }}
        >
          改变文本
        </button>
      </div>
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    if (this.state.counter !== nextState.counter) {
      return true;
    }
    return false;
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  change() {
    this.setState({
      message: "hello React",
    });
  }
}

// footer
function Footer() {
  return <div>Footer</div>;
}

export default class App extends Component {
  render() {
    console.log("App");
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
