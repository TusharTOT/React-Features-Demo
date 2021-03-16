
import React from 'react';
import './loader.scss'

export const LoaderRing = () => (
    <div className="loaders-container">
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
);