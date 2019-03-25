import React, { Component } from 'react';
import './ScheduleList.css';
import { groupList } from '../../global/Global';

class ScheduleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: [],
    }
  }

  componentDidMount(){
    this.setState({
      schedule: this.props.schedule,
    });
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.schedule!==prevState.schedule){
      return { schedule: nextProps.schedule};
    }
    else return null;
  }

  render() {
    return (
      <div className="schedule-list">
        <div className="module-box">
          <div className="header">
            SCHEDULES
          </div>
          <div className="content">
            <div className="table">
              { this.state.schedule.map((item, key)=>{
                  const groupItem = groupList.reduce((result, group) => {
                      if(group.id === item.groupId){
                        result = group;
                      }
                      return result;
                    }, "");
                  return <div key={key} className="item">
                    <div className="col-2"><div className={`group-item ${groupItem.color}`}>{item.task}</div></div>
                    <div className="col-2">{groupItem.name}</div>
                    <div className="col-2">{item.taskTitle}</div>
                    <div className="col-2">{item.dateBegin}</div>
                    <div className="col-2">{item.dateEnd}</div>
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