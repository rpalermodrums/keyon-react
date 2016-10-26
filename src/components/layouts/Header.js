import React, {Component} from 'react';

import {
  Navbar,
  Nav,
  MenuItem,
  NavDropdown,
  NavItem,
} from 'react-bootstrap';

class Header extends Component {
  render () {
    return (
      <Navbar className='header'>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='/'>Oscar Williams II</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href='/'>Home</NavItem>
          <NavItem eventKey={2} href='/about'>About</NavItem>
          <NavItem eventKey={3} href='/contact'>Contact</NavItem>
          <NavDropdown eventKey={4} title='Media' id='media'>
            <MenuItem eventKey={4.1} href='media-player'>Media Player</MenuItem>
            <MenuItem eventKey={4.2} href='crate'>Crate</MenuItem>
          </NavDropdown>
          <NavDropdown eventKey={5} title='Calendars' id='calendars'>
            <MenuItem eventKey={5.1} href='performance'>Performances</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={5.2} href='booking'>Booking</MenuItem>
            <MenuItem eventKey={5.3} href='instruction'>Instruction</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
