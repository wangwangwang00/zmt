import React, { PureComponent } from 'react'

function WithAuth(Component){
   const WithAuthCpn =   props =>{
        const {isLogin} = props;
        if(isLogin){
            return <Component {...props} />
        }else{
            return <LoginPage/>
        }
    }
    WithAuthCpn.displayName = "WithAuthCpn"
    return WithAuthCpn;
}



//登录页
class LoginPage extends PureComponent{
    render(){
        return(
            <div>
                <h2>登录页</h2>
            </div>
        )
    }
}

//购物车页面
class CartPage extends PureComponent{
    render(){
        return(
            <div>
                CartPage
            </div>
        )
    }
}

const WithAuthCart = WithAuth(CartPage);
export default class App extends PureComponent {
    render() {
        return (
            <div>
                <WithAuthCart isLogin={true}/>
            </div>
        )
    }
}
