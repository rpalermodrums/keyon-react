import React, {Component} from 'react';
import {Calendar} from 'react-date-range';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import autobind from 'autobind-decorator';

@autobind
@observer
class InstructionCalendar extends Component {
  @observable date = null

  handleSelect (date) {
    this.date = date.format('dddd, MMMM Do YYYY')
  }

  render () {
    return (
      <div className="page">
        <h1>Instruction Calendar</h1>

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

export default InstructionCalendar;
