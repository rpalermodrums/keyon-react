import React, {Component} from 'react';
import AppConstants from '../../constants/AppConstants';

const { bioText } = AppConstants;

class AboutPage extends Component {
  render () {
    return (
      <div className='page'>
        <h1>About</h1>
        <p>{bioText}</p>
      </div>
    );
  }
}

export default AboutPage;
