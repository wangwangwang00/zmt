import React, { PureComponent } from "react";

class App extends PureComponent {
  render() {
    return <div>
        <h2>年龄:{this.props.age}</h2>
    </div>;
  }
}

App.displayName = "John"
function enhanceComponent(WrappedComponent) {
  return class NewComponent extends PureComponent {
    render() {
      return <WrappedComponent {...this.props}/>;
    }
  };
}

const EnhanceComponent = enhanceComponent(App);
export default EnhanceComponent;
