import SearchBar from "../SearchBar/SearchBar";
import AppLogo from "../AppLogo/AppLogo";
import React from 'react';

import './Header.css';

export default () => {
    return (<div className="header">
        <div className="header__logo">
            <AppLogo/>
        </div>
        <div className="header__search">
            <SearchBar/>
        </div>
    </div>)
}