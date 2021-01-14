import React, { PureComponent } from "react";

export default class App extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            userName:'',
            password:'',
            vaild:''
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
                   name="userName"
                   onChange={e => this.handleChange(e)}
                   value={this.state.userName}/>
          </label>
          <br/>
          <label htmlFor="password">
            密码：
            {/* 受控组件 */}
            <input typt="text" 
                   id="password" 
                   name="password"
                   onChange={e => this.handleChange(e)}
                   value={this.state.password}/>
          </label>
          <br/>
          <label htmlFor="vaild">
            验证码：
            {/* 受控组件 */}
            <input typt="text" 
                   id="vaild" 
                   name="vaild"
                   onChange={e => this.handleChange(e)}
                   value={this.state.vaild}/>
          </label>
          <br/>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }
  //阻止默认事件
  handleSubmit(event){
      event.preventDefault()
      const {userName,password,vaild} = this.state;
      console.log(userName,password,vaild)
  }
  handleChange(e){
      this.setState({
        [e.target.name]:e.target.value
      })
  }
}
