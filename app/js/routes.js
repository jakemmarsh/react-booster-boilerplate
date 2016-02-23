'use strict';

import React    from 'react';
import {Route}  from 'react-router';

import App      from './App';
import HomePage from './pages/Home';

export default (
  <Route component={App}>

    <Route path="/" component={HomePage} />

  </Route>
);
