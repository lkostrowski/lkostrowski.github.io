import React, {Component} from 'react';
import './App.css';

import Shelf from "../Shelf/Shelf";
import IssueView from "../IssueView/IssueView";
import Header from "../../components/Header/Header";

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Header/>
                    <Route exact path="/" component={Shelf}/>
                    <Route path="/issue/:id" component={IssueView}/>
                </div>
            </Router>

        );
    }
}

export default App;
