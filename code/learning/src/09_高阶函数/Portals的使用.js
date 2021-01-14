import React, { PureComponent } from 'react'
import ReactDom from 'react-dom'
class Modal extends PureComponent{
    render() {
        return ReactDom.createPortal( 
            this.props.children,
            document.getElementById('modal')
        )
    }
}

export default class Portals的使用 extends PureComponent {
    render() {
        return (
            <div>
                home
                <Modal>
                    <h2>
                        Modal
                    </h2>
                </Modal>

            </div>
        )
    }
}
