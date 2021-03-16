import React, { lazy } from 'react';
import { useSelector } from 'react-redux';
import AuthRoute from './AuthRoute';
import { Switch } from 'react-router-dom';
import AppLayout from './../containers/Authetication/AppLayout/index';
const Home = lazy(() => import('./../components/Home/index'));
const MongoDb = lazy(() => import('./../containers/MongoCrud/index'));
const EditTodo = lazy(() => import('./../containers/MongoCrud/EditTodo'));
const CreateTodo = lazy(() => import('./../containers/MongoCrud/CreateTodo'));
const About = lazy(() => import('./../components/About'));
const Contact = lazy(() => import('./../components/Contact'));
const Readme = lazy(() => import('./../components/Readme'));
const NotFound = lazy(() => import('../components/NotFound'))


const PrivateRoute = ({ match }) => {
    const { token } = useSelector(({ auth }) => auth);
    return (
        <>
            <Switch>
                <AuthRoute
                    path={`${match.path}/home`}
                    exact
                    isAuthenticated={token}
                    layout={AppLayout}
                    component={Home}
                />
                <AuthRoute
                    path={`${match.path}/mongo-crud`}
                    exact
                    isAuthenticated={token}
                    layout={AppLayout}
                    component={MongoDb}
                />
                <AuthRoute
                    path={`${match.path}/edit/:id`}
                    exact
                    isAuthenticated={token}
                    layout={AppLayout}
                    component={EditTodo}
                />
                <AuthRoute
                    path={`${match.path}/create`}
                    exact
                    isAuthenticated={token}
                    layout={AppLayout}
                    component={CreateTodo}
                />
                <AuthRoute
                    path={`${match.path}/about`}
                    exact
                    isAuthenticated={token}
                    layout={AppLayout}
                    component={About}
                />
                <AuthRoute
                    path={`${match.path}/contact`}
                    exact
                    isAuthenticated={token}
                    layout={AppLayout}
                    component={Contact}
                />
                <AuthRoute
                    path={`${match.path}/readme`}
                    exact
                    isAuthenticated={token}
                    layout={AppLayout}
                    component={Readme}
                />
                <AuthRoute
                    path="*"
                    exact
                    isAuthenticated={token}
                    layout={AppLayout}
                    component={NotFound}
                />
            </Switch>

        </>
    );
};

export default PrivateRoute;