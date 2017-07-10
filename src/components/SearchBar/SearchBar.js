import React from 'react';
import './SearchBar.css';

import MainSearch from '../MainSearch/MainSearch';
import IconBurger from '../Icons/IconBurger';

export default () => {
    return (
        <div className="search-bar">
            <MainSearch className="search-bar__input" />
            <IconBurger className="search-bar__icon" />
        </div>
    )
}