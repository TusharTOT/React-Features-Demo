import React, { Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LoaderRing } from './../components/Loader/LoaderRing';

const AuthRoute = ({
    component: Component,
    isAuthenticated,
    layout: Layout,
    ...rest
}) => {

    return (
        <Route
            {...rest}
            render={(props) => {
                if (isAuthenticated) {
                    return (
                        <Suspense fallback={<LoaderRing show />}>
                            <Layout>
                                <Component {...props} />{' '}
                            </Layout>
                        </Suspense>
                    );
                }

                return (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location.pathname },
                        }}
                    />
                );
            }}
        />
    );
};

export default AuthRoute;
