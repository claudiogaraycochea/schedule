import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: '',
    }
  }

  componentDidMount(){
    this.setState({
      animation: 'modal-animation',
    });
  }

  render() {
    return (
      <div className="modal-wrapper">
        <div className={`modal-box ${this.state.animation}`}>
          <div className="modal-header">{this.props.title} <i className="icon-close" onClick={this.props.closeModal}/></div>  
          <div className="modal-content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Modal;