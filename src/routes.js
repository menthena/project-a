import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './app';
import MainContainer from './containers/main/MainContainer';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainContainer} />
    <Route path="/:categoryId" component={MainContainer} />
  </Route>
);
