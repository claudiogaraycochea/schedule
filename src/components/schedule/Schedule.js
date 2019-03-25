import React, { Component } from 'react';
import './Schedule.css';
import CalendarSelector from '../calendarSelector/CalendarSelector';
import GroupSelector from '../groupSelector/GroupSelector';
import ScheduleEditor from '../scheduleEditor/ScheduleEditor';
import ScheduleList from '../scheduleList/ScheduleList';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule:[ 
        {
          dateBegin: '3/7/2019',
          dateEnd: '3/8/2019',
          row: 1,
          task: '10',
          taskTitle: 'Meeting',
          groupId: 1,
        },
        {
          dateBegin: '3/9/2019',
          dateEnd: '3/9/2019',
          row: 2,
          task: '12',
          taskTitle: 'Dev App',
          groupId: 3,
        },
      ],
    }
  }

  render() {
    return (
      <div className="content-page schedule">
        <div className="schedule-side">
          <CalendarSelector />
          <GroupSelector />
        </div>
        <div className="schedule-content">
          <ScheduleEditor {...this.state}/>
          <ScheduleList {...this.state}/>
        </div>
      </div>
    );
  }
}

export default Schedule;