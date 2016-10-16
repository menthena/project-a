import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './app';
import SearchContainer from './containers/search/search';
import DetailContainer from './containers/detail/detail';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={SearchContainer} />
    <Route path="/:id" component={DetailContainer} />
  </Route>
);
