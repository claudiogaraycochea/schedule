import React, { Component } from 'react';
import './TaskCreate.css';

class TaskCreate extends Component {
  render() {
    return (
      <div className="task-create">
        <div className="row">
          <input type="text" className="inp" placeholder="Task Title" />
        </div>
        <div className="row">
          <input type="text" className="inp" placeholder="Task" />
        </div>
        <div className="row">
          <div className="col-6"><input type="date" className="inp" placeholder="Date Begin" /></div> 
          <div className="col-6"><input type="date" className="inp" placeholder="Date End" /></div>
        </div>
        <div>
          <button className="btn">Save</button>
        </div>
      </div>
    );
  }
}

export default TaskCreate;