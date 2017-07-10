import React from 'react';
import Input from '../Input/Input';

const FilterSearch = ({className = ''}) => {
    return (
        <div className={"filter-search " + className}>
            <Input placeholder="Search" />
        </div>
    )
};
export default FilterSearch;

