import React, { useEffect } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import './Styles.css';
import { useDispatch } from 'react-redux'
import { logOut } from './../../actions/Auth';

const AppHeader = () => {

    const dispatch = useDispatch();
    useEffect(() => {

    }, [dispatch]);

    const logout = () => {
        dispatch(logOut());
    }

    return (
        <div className="d-flex justify-content-center badge badge-light">
            <nav>
                <ul className="list-inline d-flex m-3">
                    <li className="mr-2">
                        <NavLink exact activeClassName="active" to="/app/home">Home</NavLink>
                    </li>
                    <li className="mr-2">
                        <NavLink activeClassName="active" to="/app/mongo-crud">Mongo-Crud</NavLink>
                    </li>
                    <li className="mr-2">
                        <NavLink activeClassName="active" to="/app/contact">Contact</NavLink>
                    </li>
                    <li className="mr-2">
                        <NavLink activeClassName="active" to="/app/readme">Read me</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="text-right m-3"><button onClick={() => logout()}>Log out</button></div>
        </div>
    );
};

export default withRouter(AppHeader);