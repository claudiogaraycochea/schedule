import React, { Component } from 'react';
import './ScheduleList.css';
import { scheduleList } from '../../global/Global';

class ScheduleList extends Component {
  render() {
    return (
      <div className="schedule-list">
        <div className="module-box">
          <div className="header">
            SCHEDULES
          </div>
          <div className="content">
            <div className="table">
              { scheduleList.map((item, key)=>{
                  return <div key={key} className="item">
                    <div className="col-2">{item.id}</div>
                    <div className="col-6">{item.title}</div>
                  </div>
                })
              }              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScheduleList;