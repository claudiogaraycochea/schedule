import React, { Component } from 'react';
import './CalendarSelector.css';
import { dataMonth } from '../../global/Global';

class CalendarSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateSelected: {},
    }
  }

  componentWillMount(){
    const dateSelected = dataMonth.getToday();
    this.setState({dateSelected});
  }
  
  buildCalendarContent = () => {
    const dateSelected = this.state.dateSelected;
    let table = [];
    let itemDraggable = false;
    let counterDay = 0;
    let valueDay = dateSelected.prevMonthData.startDay;
    let monthIndex = 'previous_month';
    for (let i = 0; i < 6; i++) {
      let children = []
      for (let j = 0; j < 7; j++) {
        counterDay = counterDay + 1;
        valueDay = valueDay + 1;

        if((monthIndex==='previous_month')&&(valueDay===dateSelected.prevMonthData.endDay+1)){
          monthIndex = 'actual_month';
          valueDay = 1;
          itemDraggable = true;
        }

        if((monthIndex==='actual_month')&&(valueDay===dateSelected.monthData.endDay+1)){
          monthIndex = 'next_month';
          valueDay = 1;
          itemDraggable = false;
        }

        if(itemDraggable) {
          children.push(
            <td key={j}>
              <div className="item item-draggable">
                <div className="value-day">{valueDay}</div>
              </div>
            </td>
          )
        }
        else {
          children.push(
            <td key={j}>
              <div className="item item-disabled">
                <div className="value-day">{valueDay}</div>
              </div>
            </td>
          )
        }
      }
      table.push(<tr key={i}>{children}</tr>)
    }
    return table;
  }

  buildCalendar = () => {
    return(
      <table className="calendar-wrapper">
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {this.buildCalendarContent()}
        </tbody>
      </table>
    )
  }
  
  render() {
    return (
      <div className="calendar-selector">
        <div className="module-box">
          <div className="header">
            MARCH
          </div>
          <div className="content">
            {this.buildCalendar()}
          </div>
        </div>
      </div>
    );
  }
}

export default CalendarSelector;