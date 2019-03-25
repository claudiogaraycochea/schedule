import React, { Component } from 'react';
import './TaskCreate.css';

class TaskCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scheduleItem: null,
    }
  }

  /*getGroup = (groupId) => {
    const item = groupList.filter(item => (item.id === groupId));
    if(item.length>0){
      return item[0];
    }
    return null;
  }*/
  
  getScheduleItem = (task) => {
    const item = this.props.schedule.filter(item => (item.task === task));
    if(item.length>0){
      return item[0];
    }
    return null;
  }

  componentWillMount(){
    const task = this.props.task;
    const scheduleItem = this.getScheduleItem(task);
    console.log('taskCreate task:',task);
    console.log('scheduleItem: ',scheduleItem)
    this.setState({
      scheduleItem
    });
  }

  handleInputChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const name = e.target.name;
    this.setState({
      scheduleItem:{
        ...this.state.scheduleItem,
        [name]: value,
      }
    });
  }

  saveSchedule = () => {
    console.log('saveSchedule: ',this.state.scheduleItem);
    this.props.saveSchedule(this.state.scheduleItem);
  }

  render() {
    console.log('TaskCreate: this.state: ',this.state);
    return (
      <div className="task-create">
        <div className="row">
          <input type="text" name="taskTitle" defaultValue={this.state.scheduleItem.taskTitle} className="inp" placeholder="Task Title" onChange={this.handleInputChange} />
        </div>
        <div className="row">
          <input type="text" defaultValue={this.state.scheduleItem.task} className="inp" placeholder="Task" />
        </div>
        <div className="row">
          <div className="col-6"><input type="text" defaultValue={this.state.scheduleItem.dateBegin} className="inp" placeholder="Date Begin" /></div> 
          <div className="col-6"><input type="text" defaultValue={this.state.scheduleItem.dateEnd} className="inp" placeholder="Date End" /></div>
        </div>
        <div>
          <button className="btn" onClick={()=>this.saveSchedule()}>Save</button>
        </div>
      </div>
    );
  }
}

export default TaskCreate;