import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home';
import Info from './components/Info';

import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/about" component={Info} />
    </Router>
  , document.querySelector('.root')
);
