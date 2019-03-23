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
                    <div className="col-4">{item.title}</div>
                    <div className="col-2">{item.createdAt}</div>
                    <div className="col-2">{item.updatedAt}</div>
                    <div className="col-2"><button className="btn small">View</button></div>
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