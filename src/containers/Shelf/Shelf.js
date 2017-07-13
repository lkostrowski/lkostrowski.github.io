import React, {Component} from 'react';
import './Shelf.css';
import Sidebar from "../../components/Sidebar/Sidebar";
import IssuesList from "../../components/IssuesList/IssuesList";

import getIssues from '../../services/IssuesProvider.dummy';
import FilterSearch from "../../components/FilterSearch/FilterSearch";
import Filters from "../Filters/Filters";

class Shelf extends Component {
    render() {
        return (
            <div className="shelf">
                <div className="shelf__sidebar">
                    <Sidebar>
                        <FilterSearch className="shelf__search" />
                        <Filters/>
                    </Sidebar>
                </div>
                <div className="shelf__main">
                    <div className="shelf__content">
                        <IssuesList issues={getIssues()}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shelf;
