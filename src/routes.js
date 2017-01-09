'use strict';

import React        from 'react';
import { Route }    from 'react-router';

import AppContainer from './app_container';
import HomePage     from './pages/home';

const Routes = (
  <Route component={AppContainer}>

    <Route path="/" component={HomePage} />

  </Route>
);

export default Routes;
