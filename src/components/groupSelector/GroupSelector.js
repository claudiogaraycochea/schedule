import React, { Component } from 'react';
import './GroupSelector.css';

class GroupSelector extends Component {
  render() {
    return (
      <div className="group-selector">
        <div className="module-box">
          <div className="header">
            Group Header
          </div>
          <div className="content">
            Group content
          </div>
        </div>
      </div>
    );
  }
}

export default GroupSelector;