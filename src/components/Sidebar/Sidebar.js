import React from 'react';
import AppLogo from '../AppLogo/AppLogo';

import Filter from '../Filter/Filter';

export default (props) => (
    <div className="sidebar">
        <AppLogo/>
        <Filter />
        <Filter />
    </div>
)
