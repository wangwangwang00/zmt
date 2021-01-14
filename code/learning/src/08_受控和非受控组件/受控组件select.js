import React, { PureComponent } from "react";

export default class App extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
          fruit:'orange'
        }
    }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <select name="fruit" id="" onChange={e => this.handleChange(e)} value={this.state.fruit}>
            <option value="apple">苹果</option>
            <option value="banana">香蕉</option>
            <option value="orange">橙子</option>
           
          </select>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }
  //阻止默认事件
  handleSubmit(event){
      event.preventDefault()
      console.log(this.state.fruit)
  }
  handleChange(e){
    // console.log(e)
      this.setState({
        fruit:e.target.value
      })
  }
}
