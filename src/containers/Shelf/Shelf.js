import React, {Component} from 'react';
import './Shelf.css';
import Sidebar from "../../components/Sidebar/Sidebar";
import IssuesList from "../../components/IssuesList/IssuesList";
import SearchBar from "../../components/SearchBar/SearchBar";

import getIssues from '../../services/IssuesProvider.dummy';

class Shelf extends Component {
    render() {
        return (
            <div className="shelf">
                <div className="shelf__sidebar">
                    <Sidebar />
                </div>
                <div className="shelf__main">
                    <SearchBar/>
                    <div className="shelf__content">
                        <IssuesList issues={getIssues()}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shelf;
