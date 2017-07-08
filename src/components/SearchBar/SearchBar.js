import React from 'react';
import './SearchBar.css';

export default () => {
    return (
        <div className="search-bar">
            <input type="search" className="search-bar__input" placeholder="SEARCH" />
        </div>
    )
}