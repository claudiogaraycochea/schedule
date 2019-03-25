import React, { Component } from 'react';
import SideMenu from '../sideMenu/SideMenu';
import Header from '../header/Header';
import Schedule from '../schedule/Schedule';

class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="side">
          <SideMenu />
        </div>
        <div className="content">
          <Header />
          <Schedule />
        </div>
      </div>
    );
  }
}

export default Main;