import React from 'react';
import './SearchBar.css';

import MainSearch from '../MainSearch/MainSearch';

export default () => {
    return (
        <div className="search-bar">
            <MainSearch className="search-bar__input" />
        </div>
    )
}