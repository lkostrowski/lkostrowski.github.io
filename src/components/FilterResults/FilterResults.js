import React from 'react';

import './FilterResults.css';


export default ({items}) => {
    function renderItem (item, i) {
        return (
            <li className="filter-results__item" key={i}>
                <span className="filter-results__label">{item}</span>

            </li>
        )
    }

    return (
        <ul className="filter-results">
            {items.map((item, key) => (
                renderItem(item, key)
            ))}
        </ul>
    )
}