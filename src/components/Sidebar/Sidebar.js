import React from 'react';

import FilterSearch from "../FilterSearch/FilterSearch";

import './Sidebar.css';
import Filters from "../../containers/Filters/Filters";

export default (props) => (
    <div className="sidebar">
        <FilterSearch className="sidebar__search" />
        <Filters/>
    </div>
)
