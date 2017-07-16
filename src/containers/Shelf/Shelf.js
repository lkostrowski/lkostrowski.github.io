import React, {Component} from 'react';
import './Shelf.css';
import Sidebar from "../../components/Sidebar/Sidebar";
import IssuesList from "../../components/IssuesList/IssuesList";

import getIssues from '../../services/IssuesProvider.dummy';
import FilterSearch from "../../components/FilterSearch/FilterSearch";
import Filters from "../Filters/Filters";

import PT from 'prop-types';

import {connect} from 'react-redux';

class Shelf extends Component {
    render() {
        return (
            <div className="shelf">
                <div className={`shelf__sidebar ${this.props.sidebarOpen ? '' : 'shelf__sidebar--closed'}`}>
                    <Sidebar open={this.props.sidebarOpen}>
                        <FilterSearch className="shelf__search"/>
                        <Filters/>
                    </Sidebar>
                </div>
                <div className="shelf__main">
                    <div className="shelf__content">
                        <IssuesList wide={!this.props.sidebarOpen} issues={getIssues()}/>
                    </div>
                </div>
            </div>
        );
    }
}

Shelf.propTypes = {
    sidebarOpen: PT.bool.isRequired
};

function mapStateToProps(state) {
    return {...state.pagesShelf};
}

export default connect(mapStateToProps)(Shelf);
