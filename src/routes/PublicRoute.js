import React, { lazy } from 'react';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import NoAuthRoute from './NoAuthRoute';

const NotFound = lazy(() => import('./../components/NotFound'));
const Login = lazy(() => import('./../containers/Authetication/Login'));
const SignUp = lazy(() => import('./../containers/Authetication/SignUp'));


const PublicRoute = ({ match }) => {
    const { token } = useSelector(({ auth }) => auth);
    return (
        <>
            <Switch>
                <NoAuthRoute
                    exact
                    path={`${match.path}login`}
                    isAuthenticated={token}
                    // layout={AuthLayout}
                    component={Login}
                />
                <NoAuthRoute
                    exact
                    path={`${match.path}signup`}
                    isAuthenticated={token}
                    // layout={AuthLayout}
                    component={SignUp}
                />
                <NoAuthRoute
                    exact
                    path="*"
                    isAuthenticated={token}
                    // layout={AuthLayout}
                    component={NotFound}
                />
            </Switch>
        </>
    );
};

export default PublicRoute;