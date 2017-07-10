import  React from 'react';

export default ({className, fill}) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="11px" height="2px" viewBox="0 0 11 2">
            <path fill={fill || "#fff"} fillRule="evenodd"
                  d="M 1 0C 1 0 10 0 10 0 10.55 0 11 0.45 11 1 11 1.55 10.55 2 10 2 10 2 1 2 1 2 0.45 2 0 1.55 0 1 0 0.45 0.45 0 1 0Z"/>
        </svg>
    )
}
