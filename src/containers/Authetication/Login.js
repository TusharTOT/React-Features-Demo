import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserLogin } from '../../actions/Auth';
import { useDispatch } from 'react-redux';

const Login = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {

    }, [dispatch]);

    return (
        <div>
            Login Form
            <span className="mx-3"><Link to='/signup'>Register</Link></span>
            <span className="mx-3"><button onClick={() => { dispatch(UserLogin()); props.history.push('/') }}>Login</button></span>
        </div>
    );
};

export default Login;