import React, {Component} from 'react';
import {Calendar} from 'react-date-range';

class BookingCalendar extends Component {
  render () {
    return (
      <div className="page">
        <h1>Booking Calendar</h1>
        <Calendar
          onInit={this.handleSelect}
          onChange={this.handleSelect}
        />
      </div>
    )
  }
}

export default BookingCalendar;
