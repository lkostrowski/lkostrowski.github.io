import React from 'react';
import './Input.css';
import propTypes from 'prop-types';

const Input = ({placeholder = '', type = 'text', name = `inputName`, value = '', onChange}) => {
    function changeHandler(e) {
        if (onChange) {
            onChange(e);
        }
    }

    return (
        <div className="input">
            <input onChange={(e) => changeHandler(e)}
                   name={name}
                   defaultValue={value}
                   type={type}
                   className="input__field"
                   placeholder={placeholder}/>
        </div>
    )
};

Input.propTypes = {
    placeholder: propTypes.string,
    type: propTypes.string,
    name: propTypes.string,
    value: propTypes.string,
    onChange: propTypes.func

};

export default Input;