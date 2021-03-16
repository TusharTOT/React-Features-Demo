import React from 'react';
import TodoList from './TodoList';
import { Link } from 'react-router-dom';

const MongoDb = () => {
    return (

        <div className="container">
            <h1>MERN-Stack Todo App</h1>
            <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <TodoList />
                    <li className="navbar-item">
                        <Link to="/create" className="nav-link">Create Todo</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MongoDb;