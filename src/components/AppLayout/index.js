import React from 'react';
import { withRouter } from 'react-router-dom';
import SideBar from './SideBar';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

const Layout = (props) => {
    const { children } = props;
    return (
        <div>
            <AppHeader />
            <div>
                <main className="">
                    <div className="m-3">{children}</div>
                    <AppFooter />
                </main>
            </div>
        </div>
    );
};

export default withRouter(Layout);