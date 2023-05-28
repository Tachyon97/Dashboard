import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import DriverDashboard from './components/DriverDashboard';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/admin" component={AdminDashboard} />
      <Route path="/driver" component={DriverDashboard} />
    </Switch>
  </Router>
);

export default Routes;
