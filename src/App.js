import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

const App = () => {

  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route path="/app" component={PrivateRoute} />
      <Route path="/" component={PublicRoute} />
    </Switch>
  );
};


export default App;
