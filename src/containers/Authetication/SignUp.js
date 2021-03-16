import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            Register Here
            <span className="mx-3"><Link to='/login'>Login</Link></span>
        </div>
    );
};

export default SignUp;