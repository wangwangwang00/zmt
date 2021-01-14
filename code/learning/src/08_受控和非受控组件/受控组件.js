import React, { PureComponent } from "react";

export default class App extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            userName:''
        }
    }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="userName">
            用户：
            {/* 受控组件 */}
            <input typt="text" 
                   id="userName" 
                   onChange={e => this.handleChange(e)}
                   value={this.state.userName}/>
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }
  //阻止默认事件
  handleSubmit(event){
      event.preventDefault()
      console.log(this.state.userName)
  }
  handleChange(e){
      this.setState({
        userName:e.target.value
      })
  }
}
