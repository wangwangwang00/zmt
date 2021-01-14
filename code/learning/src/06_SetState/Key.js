import React, { Component } from "react";

export default class Key extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: ["111", "222"],
    };
  }
  render() {
    const { movie } = this.state;
    return (
      <div>
        <ul>
          {movie.map((item, index) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        <button onClick={() => {this.add()}}>add</button>
      </div>
    );
  }
  add(){
    //   this.setState({
    //       movie:[...this.state.movie,"333"]
    //   })
    this.setState({
        movie:["333",...this.state.movie]
    })
  }
}
