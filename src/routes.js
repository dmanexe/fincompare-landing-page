'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import CompanyPage from './components/CompanyPage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="company/:id" component={companyPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
