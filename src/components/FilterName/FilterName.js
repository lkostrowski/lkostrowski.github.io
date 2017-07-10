import React from 'react';
import classNames from 'class-names';

import IconPlus from '../Icons/IconPlus';
import IconMinus from '../Icons/IconMinus';

import './FilterName.css';

export default ({name, active}) => {
    const nameClasses = classNames({
        'filter-name': true,
        'filter-name--active': active
    });

    return (
        <div className={nameClasses}>
            <span className="filter-name__name">
                {name}
            </span>

            {!active ? <IconPlus fill="inherit" className="filter-name__icon filter-name__icon--plus"/> :
                <IconMinus fill="inherit" className="filter-name__icon filter-name__icon--minus"/>}
        </div>
    )
}