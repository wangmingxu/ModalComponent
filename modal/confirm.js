import Dialog from './'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

let that = null
const container = document.createElement('div')
document.body.appendChild(container)

class ConfirmReact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            title: '',
            content: '',
            onOk: () => {},
            onCancel: () => {},
            zIndex: 1000,
        }
        that = this
    }

    componentWillUnmount() {
        document.removeChild(container)
    }

    render() {
        const { show, title, content, onOk, onCancel, zIndex } = this.state
        return (
            <Dialog
                show={show}
                title={title}
                onOk={onOk}
                onCancel={onCancel}
                zIndex={zIndex}
            >
                {content}
            </Dialog>
        )
    }
}

ReactDOM.render(<ConfirmReact />, container)

function transFn(fn) {
  const regExp = /new\s+Promise/g;
  const str = fn.toString();

  return regExp.test(str) ?
        () => fn().then(() => that.setState({ show: false }))
        : () => { fn(); that.setState({ show: false }); return null; };
}

export default function Confirm({
  title,
  content,
  onOk,
  onCancel,
  zIndex = 1000,
}) {
  that.setState({
    show: true,
    title: title,
    content: content,
    onOk: transFn(onOk),
    onCancel: transFn(onCancel),
    zIndex,
  });
}
//confirm.js是在dialog.js(即./index.js)的基础上面在回调上面再做了一次处理，用于兼容传入promise的情况
//把dialog组件变成一个可配置的函数，注意直接调用dialog组件和用函数动态设置dialog组件的区别
//confirm.js的逻辑其实可以直接写在dialog组件里面，直接在dialog里面暴露这个配置的函数，但是这样dialog组件就不能做单独组件调用了
