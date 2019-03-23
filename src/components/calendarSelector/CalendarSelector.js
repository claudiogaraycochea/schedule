import React, { Component } from 'react';
import './CalendarSelector.css';

class CalendarSelector extends Component {
  render() {
    return (
      <div className="calendar-selector">
        <div className="module-box">
          <div className="header">
            MARCH
          </div>
          <div className="content">
            Calendar content
          </div>
        </div>
      </div>
    );
  }
}

export default CalendarSelector;