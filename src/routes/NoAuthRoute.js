import React, { Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LoaderRing } from './../components/Loader/LoaderRing';

const NoAuthRoute = ({
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
                    return <Redirect to='/app/home' />;
                }

                return (
                    <Suspense fallback={<LoaderRing show />}>
                        <Component {...props} />
                    </Suspense>
                );
            }}
        />
    );
};

export default NoAuthRoute;