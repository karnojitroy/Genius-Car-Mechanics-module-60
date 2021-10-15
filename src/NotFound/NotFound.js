import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundGif from '../../src/images/404.gif';
const NotFound = () => {
    return (
        <div>
            <img src={NotFoundGif} alt="" />
            <br />
            <Link to="/home">Go Back</Link>
        </div>
    );
};

export default NotFound;