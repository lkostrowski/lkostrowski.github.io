import React from 'react';
import AppLogo from '../AppLogo/AppLogo';

import FilterSearch from "../FilterSearch/FilterSearch";

import './Sidebar.css';
import Filters from "../../containers/Filters/Filters";

export default (props) => (
    <div className="sidebar">
        <AppLogo/>
        <FilterSearch className="sidebar__search" />
        <Filters/>
    </div>
)
