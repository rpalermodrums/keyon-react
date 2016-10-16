import React, {Component} from 'react';
import {Calendar} from 'react-date-range';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import autobind from 'autobind-decorator';

@observer
class PerformanceCalendar extends Component {
  @observable date = null;

  handleSelect (date) {
    this.date = date.format('dddd, MMMM Do YYYY');
  }

  render () {
    return (
      <div className="page">
        <h1>Performance Calendar</h1>
        <Calendar
          onInit={this.handleSelect}
          onChange={this.handleSelect}
        />

        <div>
          {this.date}
        </div>

      </div>
    )
  }
}

export default PerformanceCalendar;
