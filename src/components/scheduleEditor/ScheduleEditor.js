import React, { Component } from 'react';
import './ScheduleEditor.css';

class ScheduleEditor extends Component {

  buildLapse = () => {
    return(
			<table className="lapse-wrapper">
        <thead>
          <tr>
            <th>DAY 1</th>
            <th>DAY 2</th>
            <th>DAY 3</th>
            <th>DAY 4</th>
            <th>DAY 5</th>
            <th>DAY 6</th>
            <th>DAY 7</th>
          </tr>
        </thead>
				<tbody>
          <tr>
            <td>DAY 1</td>
            <td>DAY 2</td>
            <td>DAY 3</td>
            <td>DAY 4</td>
            <td>DAY 5</td>
            <td>DAY 6</td>
            <td>DAY 7</td>
          </tr>
          <tr>
            <td>DAY 1</td>
            <td>DAY 2</td>
            <td>DAY 3</td>
            <td>DAY 4</td>
            <td>DAY 5</td>
            <td>DAY 6</td>
            <td>DAY 7</td>
          </tr>
          <tr>
            <td>DAY 1</td>
            <td>DAY 2</td>
            <td>DAY 3</td>
            <td>DAY 4</td>
            <td>DAY 5</td>
            <td>DAY 6</td>
            <td>DAY 7</td>
          </tr>
          <tr>
            <td>DAY 1</td>
            <td>DAY 2</td>
            <td>DAY 3</td>
            <td>DAY 4</td>
            <td>DAY 5</td>
            <td>DAY 6</td>
            <td>DAY 7</td>
          </tr>
					{/*this.buildCalendarContent()*/}
				</tbody>
			</table>
		)
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
      </div>
    );
  }
}

export default ScheduleEditor;