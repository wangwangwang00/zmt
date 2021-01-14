import React, { PureComponent } from 'react'
import {HomeWrapper,TitleWrapper} from './style'

export default class Home extends PureComponent {
    render() {
        return (
            <HomeWrapper>
                <TitleWrapper>我是home的标题</TitleWrapper>
                <span className="banner">我是轮播图</span>
            </HomeWrapper>
        )
    }
}
