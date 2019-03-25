import React, { Component } from 'react';
import './Schedule.css';
import CalendarSelector from '../calendarSelector/CalendarSelector';
import GroupSelector from '../groupSelector/GroupSelector';
import ScheduleEditor from '../scheduleEditor/ScheduleEditor';
import ScheduleList from '../scheduleList/ScheduleList';
import { schedule } from '../../global/Global';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: schedule,
    }
  }

  scheduleInsert = (scheduleItem) => {
    let schedule = JSON.parse(JSON.stringify(this.state.schedule));
    const index = schedule.map(function(item){ return item.task;}).indexOf(scheduleItem.task);
    schedule[index] = scheduleItem;
    this.setState({
      schedule,
    })
  }

  render() {
    console.log('Schedule', this.state.schedule);
    return (
      <div className="content-page schedule">
        <div className="schedule-side">
          <CalendarSelector />
          <GroupSelector />
        </div>
        <div className="schedule-content">
          <ScheduleEditor {...this.state} scheduleInsert={this.scheduleInsert}/>
          <ScheduleList {...this.state}/>
        </div>
      </div>
    );
  }
}

export default Schedule;