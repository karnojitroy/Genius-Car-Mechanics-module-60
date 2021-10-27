import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInGoolge } = useAuth();
    return (
        <div>
            <h3>This is login</h3>
            <button onClick={signInGoolge} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;