import React, { Component } from 'react';
import SideMenu from '../sideMenu/SideMenu';
import HeaderPage from '../headerPage/HeaderPage';
import Schedule from '../schedule/Schedule';

class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="side">
          <SideMenu />
        </div>
        <div className="content">
          <HeaderPage />
          <Schedule />
        </div>
      </div>
    );
  }
}

export default Main;