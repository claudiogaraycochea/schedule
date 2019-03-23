import React, { Component } from 'react';
import './SideMenu.css';

class SideMenu extends Component {
  render() {
    return (
      <div className="side-menu">
        <div className="logo"></div>
        <div className="menu-list">
          <div className="item selected"><i className="icon-group" /></div>
          <div className="item"><i className="icon-earn" /></div>
          <div className="item"><i className="icon-settings" /></div>
        </div>
      </div>
    );
  }
}

export default SideMenu;