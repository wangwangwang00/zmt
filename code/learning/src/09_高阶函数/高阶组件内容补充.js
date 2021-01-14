import React, { PureComponent,createRef,forwardRef } from "react";

class Home extends PureComponent {
  render() {
    return <div>
        <h2>Home</h2>
    </div>;
  }
}

const EnhanceAbout = forwardRef(
    function(props,ref){
        return(
            <p ref={ref}>About</p>
        )
    }
)

export default class App extends PureComponent {
    constructor(props){
        super(props);
        this.titleRef = createRef()
        this.titleEle = createRef()
        this.aboutRef = createRef()
    }
  render() {
    return (
      <div>
        <h2 ref = {this.titleRef}>hello World</h2>
        <Home ref = {this.titleEle}/>
        <EnhanceAbout ref={this.aboutRef} />
        <button onClick={e => this.printRef()}>打印</button>
        
      </div>
    );
  }
  printRef(){
      console.log(this.titleRef.current)
      console.log(this.titleEle.current);
      console.log(this.aboutRef.current);
  }
}
