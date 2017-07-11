import React from 'react';
import {Link} from 'react-router-dom';
import './AppLogo.css';

export default (props) => (
    <Link to="/">
        <div className="app-logo">
            COMICARY
        </div>
    </Link>
)
