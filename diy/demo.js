import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import WrapperModal from '../diy/wrapper'

class ModalDemo extends Component {
    constructor(props) {
        super(props)
        this.state = { show: false }
    }

    onCancel() {
        console.log('cancel')
        this.setState({ show:false })
    }

    render() {
        return (
            <div>
                <input type="button" value="demo1" className="demo" onClick={()=>this.setState({show:true})}/>
                <WrapperModal show={this.state.show} title="title" onOk={()=>{console.log('ok'); this.setState({show: false})}} onCancel={()=>this.onCancel()}>
                    <p>看我随手一打就是标准十五字</p>
                    <p>看我随手一打就是标准十五字</p>
                    <p>看我随手一打就是标准十五字</p>
                </WrapperModal>
            </div>
        )
    }
}

ReactDOM.render(<ModalDemo />, document.getElementById('content'))
