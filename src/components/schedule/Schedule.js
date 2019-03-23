import React, { Component } from 'react';
import './Schedule.css';

class Schedule extends Component {
  render() {
    return (
      <div className="content-page schedule">
        <div className="schedule-side">
          {/*<SideMenu />*/}
          Schedule side
        </div>
        <div className="schedule-content">
          Schedule Editor
          {/*<HeaderPage />
          <Schedule />*/}
        </div>
      </div>
    );
  }
}

export default Schedule;