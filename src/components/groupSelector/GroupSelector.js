import React, { Component } from 'react';
import './GroupSelector.css';

const groupList = [
  {
    id: 1,
    name: 'Investors',
    color: 'green',
  },
  {
    id: 2,
    name: 'Developers',
    color: 'violet',
  },
  {
    id: 3,
    name: 'Investors & Devs',
    color: 'blue',
  }
];

class GroupSelector extends Component {
  render() {
    return (
      <div className="group-selector">
        <div className="module-box">
          <div className="header">
            GROUPS
          </div>
          <div className="content">
            { groupList.map((item, key)=>{
                return <div key={key} className={`group-item ${item.color}`}>{item.name}</div>
              })
            }
          </div>
          <div className="footer"><button className="btn large-full">Add Group</button></div>
        </div>
      </div>
    );
  }
}

export default GroupSelector;