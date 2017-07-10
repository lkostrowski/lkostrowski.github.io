import React, {Component} from 'react';
import './App.css';

import Shelf from "../Shelf/Shelf";
import IssueView from "../IssueView/IssueView";

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Route exact path="/" component={Shelf}/>
                    <Route path="/issue/:id" component={IssueView}/>
                </div>
            </Router>

        );
    }
}

export default App;
