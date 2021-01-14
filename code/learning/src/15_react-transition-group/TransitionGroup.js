import React, { PureComponent } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./TransitionGroup.css";

export default class app extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      names: ["lilei", "john", "mounsey"],
    };
  }
  render() {
    return (
      <TransitionGroup>
         
            {this.state.names.map((item, index) => {
              return (
                <CSSTransition key={index} timeout={500} classNames="name">
                  <div>{item}</div>
                </CSSTransition>
              );
            })}
          <button onClick={(e) => this.addNames()}>添加</button>
      </TransitionGroup>
    );
  }
  addNames() {
    this.setState({
      names: [...this.state.names, "lucy"],
    });
  }
}
