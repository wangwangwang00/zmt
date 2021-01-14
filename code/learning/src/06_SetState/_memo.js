import React, { Component, PureComponent, memo } from "react";
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
class Banner extends PureComponent {
  render() {
    console.log("banner");
    return <div>Banner</div>;
  }
}

class ProList extends PureComponent {
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
  render() {
    console.log("Main");

    return (
      <div>
        <Banner />
        <ProList />
      </div>
    );
  }

}

// footer


const MemoFooter = memo(
  function Footer() {
    console.log(888)
    return <div>Footer</div>;
  }
)

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: "hello world",
    };
  }
  render() {
    console.log("App");
    const { counter } = this.state;
    return (
      <div>
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
        <Header />
        <Main />
        <MemoFooter />
      </div>
    );
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
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.counter !== nextState.counter) {
      return true;
    }
    return false;
  }
}
