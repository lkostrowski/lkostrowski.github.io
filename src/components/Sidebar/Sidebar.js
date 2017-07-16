import React from 'react';
import './Sidebar.css';
import PT from 'prop-types';

import {connect} from 'react-redux';

import sidebarActions from '../../actions/sidebar';

import IconPlus from '../Icons/IconPlus';
import IconMinus from '../Icons/IconMinus';

function toggleHandler(dispatch) {
    dispatch(sidebarActions.toggleSidebar());

}

const Sidebar = ({open = true, children, dispatch, canBeClosed = false}) => (
    <div className="sidebar">
        {canBeClosed && <button className="sidebar__toggle-button" onClick={() => toggleHandler(dispatch)}>
            {open ?
                <IconMinus fill="inherit"/> :
                <IconPlus fill="inherit"/> }
        </button>}
        {open && children}
    </div>
);

Sidebar.propTypes = {
    open: PT.bool,
    canBeClosed: PT.bool
};

export default connect()(Sidebar);