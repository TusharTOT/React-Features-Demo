import React from 'react';

const AppFooter = () => {
    const date = new Date();
    return (
        <div className=" p-3 d-flex justify-content-center badge badge-light">
            Copyright {date.getFullYear()}
        </div>
    );
};

export default AppFooter;