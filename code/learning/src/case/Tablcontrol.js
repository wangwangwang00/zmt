import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./style.css"


export default class TabControl extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentIndex:0
        }
    }
    render() {
        const {titles} = this.props;
        const {currentIndex} = this.state;
        return (
            <div className="tab-control">
                {
                    titles.map((item,index) => {
                        return (
                            <div key={index} 
                                        className={"tab-item " + (index === currentIndex ?'active' :'')} 
                                        onClick = {e => this.itemClick(index)}>
                                <span>{item}</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    itemClick(index){
        const {itemClick} = this.props;
        this.setState({
            currentIndex:index
        })
        itemClick(index)

    }
}

TabControl.propTypes = {
    titles:PropTypes.array.isRequired
}