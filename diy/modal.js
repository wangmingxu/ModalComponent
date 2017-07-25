import React, {Component, PropTypes} from 'react';

export default class Modal extends Component {
  static defaultProps = {
    show: false,
    title: '',
    zIndex: 1000,
    onOk: () => {},
    onCancel: () => {}
  }

  static propTypes = {
    title: PropTypes.string,
    zIndex: PropTypes.number,
    onOk: PropTypes.func,
    onCancel: PropTypes.func
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {title, zIndex, onOk, onCancel, show} = this.props;
    document.body.style = show
      ? 'overflow: hidden'
      : '';
    return (
      <div style={{
        display: show
          ? null
          : 'none'
      }}>
        <div className="m-mask" style={{
          zIndex: zIndex - 1
        }}></div>
        <div className="m-dialog" style={{
          zIndex: zIndex
        }}>
          <div className="md-dialog">
            <div className="md-dialog-title">
              <h4>{title}</h4>
              <span className="btn">
                <i className="iconfont" onClick={onCancel}>&times;</i>
              </span>
            </div>
            <div className="md-dialog-content">
              {this.props.children}
            </div>
            <div className="md-dialog-foot">
              <a href="#" className="btns" onClick={onCancel}>取消</a>
              <a href="#" className="btns btns-blue" onClick={onOk}>确定</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
