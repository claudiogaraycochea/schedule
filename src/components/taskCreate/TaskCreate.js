import React, { Component } from 'react';
import './TaskCreate.css';

class TaskCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scheduleItem: null,
    }
  }
  
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
    this.props.saveSchedule(this.state.scheduleItem);
    this.props.closeModal();
  }

  render() {
    return (
      <div className="task-create">
        <div className="row">
          <input type="text" name="taskTitle" defaultValue={this.state.scheduleItem.taskTitle} className="inp" placeholder="Task Title" onChange={this.handleInputChange} />
        </div>
        <div className="row">
          <input type="text" name="task" defaultValue={this.state.scheduleItem.task} className="inp" placeholder="Task" onChange={this.handleInputChange} />
        </div>
        <div className="row">
          <div className="col-6"><input type="text" name="dateBegin" defaultValue={this.state.scheduleItem.dateBegin} className="inp" placeholder="Date Begin" onChange={this.handleInputChange} /></div> 
          <div className="col-6"><input type="text" name="dateEnd" defaultValue={this.state.scheduleItem.dateEnd} className="inp" placeholder="Date End" onChange={this.handleInputChange} /></div>
        </div>
        <div>
          <button className="btn" onClick={()=>this.saveSchedule()}>Save</button>
        </div>
      </div>
    );
  }
}

export default TaskCreate;