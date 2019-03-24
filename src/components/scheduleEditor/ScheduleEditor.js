import React, { Component } from 'react';
import './ScheduleEditor.css';
import { dataMonth, groupList } from '../../global/Global';

class ScheduleEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateSelected: {},
      schedule:[ 
        {
          dateBegin: '3/7/2019',
          dateEnd: '3/7/2019',
          row: 1,
          groupId: 1,
        },
        {
          dateBegin: '3/9/2019',
          dateEnd: '3/9/2019',
          row: 2,
          groupId: 3,
        },
      ],
    }
  }

  componentWillMount(){
    const dateSelected = dataMonth.getToday();
    this.setState({dateSelected});
  }

	onDragOver = (ev) => {
		ev.preventDefault();
  }
  
  onDrop = (ev, data) => {
    const groupId = parseInt(ev.dataTransfer.getData('groupId'));
    //console.log('*******************',data,' / groupId: ',groupId);
    const dateBegin = this.state.dateSelected.month+'/'+data.day+'/'+this.state.dateSelected.year;
    let schedule = this.state.schedule;
    //let scheduleItem = schedule.filter(item => item.date === date );
    /*if(scheduleItem.length>0){
      scheduleItem[0].groupId = groupId;
    }
    else{
      const newScheduleItem = {
        date,
        groupId: groupId,
      }
      schedule.push(newScheduleItem);
    }*/

    const newScheduleItem = {
      dateBegin: dateBegin,
      dateEnd: dateBegin,
      row: data.i,
      groupId: groupId,
    }
    schedule.push(newScheduleItem);
    this.setState({
      schedule,
    });
  }

  getGroup = (groupId) => {
    const item = groupList.filter(item => (item.id === groupId));
    if(item.length>0){
      return <div className={`group-item ${item[0].color}`}>{item[0].name}</div>
    }
    return 'eee';
  }

  showGroup = (data) => {
    const row = data.i;
    const day = data.day;
    const dateBegin = this.state.dateSelected.month+'/'+day+'/'+this.state.dateSelected.year;
    const item = this.state.schedule.filter(item => ((item.dateBegin === dateBegin) && (item.row === row)));
    if(item.length>0){
      const groupId = item[0].groupId;
      const element = (item[0].groupId) ? this.getGroup(groupId) : 'ee';
      return element;
    }
    return '';
  }

  buildLapseContent = (lapseDays) => {
    //const dateSelected = this.state.dateSelected;
    let table = [];
    let itemDraggable = true;

    for (let i = 0; i < 3; i++) {
			let children = []
			for (let j = 0; j < 7; j++) {
        if(itemDraggable) {
          const data = {
            i,
            j,
            day: lapseDays[j].day,
          }
          //console.log('lapseDays :',lapseDays[j],' > j:',{j},' > lapseDays[j]value',lapseDays[j].day);
          children.push(
            <td key={j}
              onDragOver={(e)=>this.onDragOver(e)}
              onDrop={(e)=>{this.onDrop(e, data)}}>
              <div className="item item-draggable">
                <div className="value-day">
                  {/*i:{i} j:{j} d {lapseDays[j].day}*/}
                  {this.showGroup(data)}
                </div>
              </div>
            </td>
          )
        }
      }
			table.push(<tr key={i}>{children}</tr>)
		}
		return table;
  }

  buildLapse = () => {
    const lapseDays = [
      {day:3},
      {day:4},
      {day:5},
      {day:6},
      {day:7},
      {day:8},
      {day:9},
    ];
    return(
			<table className="lapse-wrapper">
        <thead>
          <tr>
            <th>DAY {lapseDays[0].day}</th>
            <th>DAY {lapseDays[1].day}</th>
            <th>DAY {lapseDays[2].day}</th>
            <th>DAY {lapseDays[3].day}</th>
            <th>DAY {lapseDays[4].day}</th>
            <th>DAY {lapseDays[5].day}</th>
            <th>DAY {lapseDays[6].day}</th>
          </tr>
        </thead>
				<tbody>
          {this.buildLapseContent(lapseDays)}
				</tbody>
			</table>
		)
  }
  
  render() {
    console.log('this.state: ',this.state);
    return (
      <div className="schedule-editor">
        <div className="module-box">
          <div className="header">
            EDITOR
          </div>
          <div className="content full">
            {this.buildLapse()}
          </div>
        </div>
      </div>
    );
  }
}

export default ScheduleEditor;