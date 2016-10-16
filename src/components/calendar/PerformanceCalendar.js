import React, {Component} from 'react';
import {Calendar} from 'react-date-range';

class PerformanceCalendar extends Component {
  render () {
    return (
      <div className="page">
        <h1>Performance Calendar</h1>
        <Calendar
          onInit={this.handleSelect}
          onChange={this.handleSelect}
        />
      </div>
    )
  }
}

export default PerformanceCalendar;
