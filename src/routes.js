import React from 'react';
import { Router, Route } from 'react-router';

import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import HomePage from './components/pages/HomePage';
import TipPage from './components/pages/TipPage';
import BookingCalendar from './components/calendar/BookingCalendar';
import PerformanceCalendar from './components/calendar/PerformanceCalendar';
import InstructionCalendar from './components/calendar/InstructionCalendar';
import Crate from './components/media/Crate';
import MediaPlayer from './components/media/MediaPlayer';

const Routes = (
  <Router>
    <Route path='/' component={HomePage} />
    <Route path='about' component={AboutPage} />

    <Route path='booking' component={BookingCalendar} />
    <Route path='performance' component={PerformanceCalendar} />
    <Route path='instruction' component={InstructionCalendar} />

    <Route path='contact' component={ContactPage} />

    <Route path='crate' component={Crate} />
    <Route path='media-player' component={MediaPlayer} />

    <Route path='tip' component={TipPage} />
  </Router>

);

export default Routes;
