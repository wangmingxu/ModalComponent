import Modal from './modal'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './style.scss'

export default class extends Component {
    appendMaskIntoDoc() {
        ReactDOM.unstable_renderSubtreeIntoContainer(
            this,
            <Modal {...this.props}>
                {this.props.children}
            </Modal>,
            this.container
        )
    }

    componentDidMount() {
        this.container = document.createElement('div')
        document.body.appendChild(this.container)
        this.appendMaskIntoDoc()
    }

    componentDidUpdate() {
        this.appendMaskIntoDoc()
    }

    componentWillUnmount() {
        document.body.removeChild(this.container)
    }

    render() {
        return null
    }
}
//为什么不直接用render(),而是用unstable_renderSubtreeIntoContainer？
//unstable_renderSubtreeIntoContainer不会把父组件（也就是this)渲染
//为什么需要做这一个中间层？为什么不直接调用modal组件（这里相当于把children向下传了一层）
//这个中间层主要是新建一个container和组件移除时清除这个container
