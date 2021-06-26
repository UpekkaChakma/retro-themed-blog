import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className="d-flex justify-content-center align-items-center p-4">
            <FontAwesomeIcon icon={faFan} style={{ fontSize: '30px', color: 'orange' }} />
            <Link to="/home" style={{ textDecoration: 'none' }}><h1 className="mx-2">Home</h1></Link>
            <FontAwesomeIcon icon={faFan} style={{ fontSize: '30px', color: 'orange' }} />
            <Link to="/admin" style={{ textDecoration: 'none' }}><h1 className="mx-2">Admin</h1></Link>
            <FontAwesomeIcon icon={faFan} style={{ fontSize: '30px', color: 'orange' }} />
        </div>
    );
};

export default NavigationBar;