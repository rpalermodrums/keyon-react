import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory} from 'react-router';
import Routes from './routes';
import Header from './components/layouts/Header';
import './App.css';

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)


/*eslint-disable no-undef*/
ReactDOM.render(
  <div >
    <Header />
    <Router history={browserHistory} routes={Routes} />
  </div>,
  document.getElementById('root')
);

/*store={createStoreWithMiddleware(rootReducer)}*/
