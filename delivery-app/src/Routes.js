import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/LoginPage';
import AdminDashboard from './pages/AdminPage';
import DriverDashboard from './pages/DriverPage';

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
