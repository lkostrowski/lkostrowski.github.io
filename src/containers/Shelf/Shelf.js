import React, {Component} from 'react';
import './Shelf.css';
import Sidebar from "../../components/Sidebar/Sidebar";
import IssuesList from "../../components/IssuesList/IssuesList";
import SearchBar from "../../components/SearchBar/SearchBar";

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
                        <IssuesList/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shelf;
