import React, { Component } from 'react';
import './HeaderPage.css';

class HeaderPage extends Component {
  render() {
    return (
      <div className="header-page">
        <div className="title">Schedule</div>
        <div className="top-menu">
          <div className="item">
            <i className="icon-alarm-dark" />
          </div>
          <div className="item">
            <i className="icon-message-dark" />
          </div>
          <div className="item">
            <i className="icon-user-dark" />
          </div>
          <div className="item">
            <i className="icon-setting-dark" />
          </div>
          <div className="item-static">
            <input type="text" defaultValue="" className="inp-search" placeholder="Search" />
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderPage;