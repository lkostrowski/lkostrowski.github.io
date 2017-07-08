import React, {Component} from 'react';
import './App.css';
import Sidebar from "../../components/Sidebar/Sidebar";
import IssuesList from "../../components/IssuesList/IssuesList";
import SearchBar from "../../components/SearchBar/SearchBar";

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="app__sidebar">
                    <Sidebar />
                </div>
                <div className="app__main">
                    <SearchBar/>
                    <div className="app__content">
                        <IssuesList/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
