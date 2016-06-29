'use strict';

import React    from 'react';
import {Route}  from 'react-router';

import App      from './app';
import HomePage from './pages/home';

export default (
  <Route component={App}>

    <Route path="/" component={HomePage} />

  </Route>
);
