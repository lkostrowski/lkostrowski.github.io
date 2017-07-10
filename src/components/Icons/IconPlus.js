import  React from 'react';
import propTypes from 'prop-types';

const IconPlus = ({className, fill, x}) => {
    let style = {};

    if (x) {
        style = {};
    } else {
        style = {
            transform: 'rotate(45deg)'
        }
    }

    return (
        <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" width="8px" height="8px"
             viewBox="0 0 8 8">
            <path fillRule="evenodd"
                  d="M 5.63 4C 5.63 4 7.64 6.01 7.64 6.01 8.03 6.4 8.03 7.04 7.64 7.43 7.64 7.43 7.43 7.64 7.43 7.64 7.04 8.03 6.4 8.03 6.01 7.64 6.01 7.64 4 5.63 4 5.63 4 5.63 1.99 7.64 1.99 7.64 1.6 8.03 0.96 8.03 0.57 7.64 0.57 7.64 0.36 7.43 0.36 7.43-0.03 7.04-0.03 6.4 0.36 6.01 0.36 6.01 2.37 4 2.37 4 2.37 4 0.36 1.99 0.36 1.99-0.03 1.6-0.03 0.96 0.36 0.57 0.36 0.57 0.57 0.36 0.57 0.36 0.96-0.03 1.6-0.03 1.99 0.36 1.99 0.36 4 2.37 4 2.37 4 2.37 6.01 0.36 6.01 0.36 6.4-0.03 7.04-0.03 7.43 0.36 7.43 0.36 7.64 0.57 7.64 0.57 8.03 0.96 8.03 1.6 7.64 1.99 7.64 1.99 5.63 4 5.63 4Z"
                  fill={fill || '#fff'}/>
        </svg>
    )
};

IconPlus.propTypes = {
    className: propTypes.string,
    fill: propTypes.string,
    x: propTypes.bool
};

export default IconPlus;
