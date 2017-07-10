import React from 'react';
import propTypes from 'prop-types';
import IconPlus from '../Icons/IconPlus'

import './FilterResults.css';


const FilterResults = ({ items, onChange = () => {} }) => {
    function getItemClass(item) {
        return item.selected ? 'filter-results__item filter-results__item--selected' : 'filter-results__item';
    }

    function clickHandler(event, item) {
        onChange(item);
    }

    function renderItem(item, i) {
        return (
            <li onClick={e => clickHandler(e, item)} className={getItemClass(item)} key={i}>
                <span className="filter-results__label">{item.label}</span>

                {item.selected && <IconPlus x={true} fill="inherit"/>}

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
};

FilterResults.propTypes = {
    items: propTypes.arrayOf(propTypes.shape({
        label: propTypes.string.isRequired,
        id: propTypes.string.isRequired,
        selected: propTypes.bool
    })).isRequired,
    onChange: propTypes.func

};

export default FilterResults;