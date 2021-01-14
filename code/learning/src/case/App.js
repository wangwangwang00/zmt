import React, { Component } from "react";
import TabControl from "./Tablcontrol";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.titles = ["新款", "精选", "流行"];
    this.state = {
      showText: "新款",
    };
  }
  render() {
    const { showText } = this.state;
    return (
      <div>
        <TabControl itemClick={index =>{this.itemClick(index)}} titles={this.titles} /> <h2> {showText} </h2>
      </div>
    );
  }
  itemClick(index){
      this.setState({
        showText:this.titles[index]
      })
  }
}
