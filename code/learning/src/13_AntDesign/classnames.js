import React, { PureComponent } from 'react'

import classNames from 'classnames'
export default class App extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            isActive:true
        }
    }
    render() {
        const {isActive} = this.state;
        const errClass = "error"
        return (
            <div>
                {/* 原生方法添加class */}
                <h2 className={"foo bar active"}>我是标题</h2>

                {/* 需要多加一个空格 */}
                <h2 className={"foo " + (isActive ?"active" :"")}>我是标题</h2>

                {/* 使用数组方式 */}
                <h2 className={["foo",(isActive ?"active" :"")].join(" ")}>我是标题</h2>

                {/* 通过classnames库 */}
                <h2 className={classNames("foo","active")}>我是标题</h2>

                <h2 className={classNames({"active":isActive} ,"title")}>我是标题2</h2>

                <h2 className={classNames("foo",errClass)}>我是标题3</h2>

                <h2 className={classNames(["foo","active",{"bar":isActive}])}>我是标题4</h2>

            </div>
        )
    }
}
