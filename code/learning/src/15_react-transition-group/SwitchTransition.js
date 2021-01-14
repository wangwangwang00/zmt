import React, { PureComponent } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import './SwitchTransition.css'

export default class app extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOn: true,
    };
  }
  render() {
    const { isOn } = this.state;
    return (
      <div style={{ padding: "20px" }}>
        <SwitchTransition mode="out-in" >
          <CSSTransition
            key={isOn ? "on" : "off"}
            timeout={1000}
            
            classNames="btn"
          >
            <button onClick={(e) => this.change()}>
              {isOn ? "on" : "off"}
            </button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    );
  }
  change() {
    this.setState({
      isOn: !this.state.isOn,
    });
  }
}
