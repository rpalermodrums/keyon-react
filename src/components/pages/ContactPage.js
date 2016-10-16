import React, {Component} from 'react';

import {
  FormGroup,
  FormControl,
  ControlLabel,
} from 'react-bootstrap'

class ContactPage extends Component {
  render () {
    return (
      <div className="page">
        <h1>Contact</h1>
        <form>
          <FormGroup>
            <ControlLabel>Name</ControlLabel>
            <FormControl type='text' />
            <ControlLabel>Subject</ControlLabel>
            <FormControl type='text' />
            <ControlLabel>Message</ControlLabel>
            <FormControl componentClass='textarea' />
            <FormControl type="submit" className="contact-submit"/>
          </FormGroup>
        </form>
      </div>
    )
  }
}

export default ContactPage;
