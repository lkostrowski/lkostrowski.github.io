import React from 'react' ;
import PT from 'prop-types';

import './MenuItem.css';

const MenuItem = ({label, onClick}) => {
    function clickHandler(e) {
        if(onClick) {
            e.preventDefault();
            e.stopPropagation();

            onClick();
        }
    }

    return (
        <button className="menu-item" onClick={(e) => clickHandler(e)}>
            <span className="menu-item__label">
                {label}
            </span>
        </button>
    )
};

MenuItem.propTypes = {
    label: PT.oneOfType([PT.string, PT.element]).isRequired,
    onClick: PT.func
};

export default MenuItem;
