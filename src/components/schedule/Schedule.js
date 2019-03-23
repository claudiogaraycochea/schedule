import React, { Component } from 'react';
import './Schedule.css';
import CalendarSelector from '../calendarSelector/CalendarSelector';
import GroupSelector from '../groupSelector/GroupSelector';
import ScheduleEditor from '../scheduleEditor/ScheduleEditor';
import ScheduleList from '../scheduleList/ScheduleList';

class Schedule extends Component {
  render() {
    return (
      <div className="content-page schedule">
        <div className="schedule-side">
          <CalendarSelector />
          <GroupSelector />
        </div>
        <div className="schedule-content">
          <ScheduleEditor />
          <ScheduleList />
        </div>
      </div>
    );
  }
}

export default Schedule;