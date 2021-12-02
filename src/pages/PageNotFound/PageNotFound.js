import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <>
            <img src="https://image.freepik.com/free-vector/traffic-sign-page-404-found-flat-illustration_80328-232.jpg" alt="" />
            <Link to="/home">HOME</Link>
        </>
    );
};

export default PageNotFound;