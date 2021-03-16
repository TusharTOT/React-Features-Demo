import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

const App = (props) => {
  const { token } = useSelector(({ auth }) => auth);

  return (
    <Switch>
      {/* {
        token ? <AppLayout {...props} /> :
          <>
            <Redirect to="/signin" />
            <Route exact path="/signin" component={Login} />
            <Route path="/signup" component={SignUp} />
          </>
      } */}

      <Redirect exact from="/" to="/login" />
      <Route path="/app" component={PrivateRoute} />
      <Route path="/" component={PublicRoute} />

      {/*
      ============Add this routes if needed=======================
      <Route path="/forgotpassword" component={ForgotPassword} />
      <Route path="/terms_condition" component={Terms} />
      */}


    </Switch>
  );
};


export default App;
