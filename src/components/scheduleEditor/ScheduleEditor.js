import React, { Component } from 'react';
import './ScheduleEditor.css';
import { dataMonth, groupList } from '../../global/Global';
import Modal from '../modal/Modal';
import TaskCreate from '../taskCreate/TaskCreate';

class ScheduleEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateSelected: {},
      schedule: [],
      modalVisibility: true,
    }
  }

  componentWillMount(){
    const dateSelected = dataMonth.getToday();
    this.setState({
      dateSelected,
      schedule: this.props.schedule,
    });
  }

	onDragOver = (ev) => {
		ev.preventDefault();
  }
  
  onDrop = (ev, data) => {
    const groupId = parseInt(ev.dataTransfer.getData('groupId'));
    const dateBegin = this.state.dateSelected.month+'/'+data.day+'/'+this.state.dateSelected.year;
    let schedule = this.state.schedule;

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
      return item[0];
    }
    return null;
  }

  showTask = (data) => {
    const row = data.i;
    const day = data.day;
    const dateBegin = this.state.dateSelected.month+'/'+day+'/'+this.state.dateSelected.year;
    const item = this.state.schedule.filter(item => ((item.dateBegin === dateBegin) && (item.row === row)));
    if(item.length>0){
      const scheduleItem = item[0];
      const groupItem = this.getGroup(scheduleItem.groupId);
      const dateBegin = new Date(item[0].dateBegin);
      const dateEnd = new Date(item[0].dateEnd);
      const diffDays = parseInt((dateEnd - dateBegin) / (1000 * 60 * 60 * 24));
      const groupItemWidth = diffDays * 149 + 149;
    return <div className={`group-item ${groupItem.color}`} style={{width: groupItemWidth}}>[{scheduleItem.task}] {groupItem.name}</div>;
    }
    return '';
  }

  buildLapseContent = (lapseDays) => {
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
          children.push(
            <td key={j}
              onDragOver={(e)=>this.onDragOver(e)}
              onDrop={(e)=>{this.onDrop(e, data)}}>
              <div className="item item-draggable">
                <div className="value-day">
                  {this.showTask(data)}
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

  closeModal = () => {
    this.setState({modalVisibility: false});
  }
  
  render() {
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

        { (this.state.modalVisibility) ? 
          <Modal 
            {...this.props}
            title='Create Website'
            closeModal={this.closeModal}
            >
            <TaskCreate closeModal={this.closeModal} />
          </Modal> : null } 

      </div>
    );
  }
}

export default ScheduleEditor;