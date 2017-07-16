import React, {Component} from 'react';
import './App.css';

import Header from "../../components/Header/Header";
import Shelf from "../Shelf/Shelf";
import IssueView from "../IssueView/IssueView";
import Dashboard from "../Dashboard/Dashboard";

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import {Provider} from "react-redux";

import store from '../../store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="app">
                        <Header/>
                        <Route exact path="/" component={Dashboard}/>
                        <Route exact path="/shelf" component={Shelf}/>
                        <Route path="/issue/:id" component={IssueView}/>
                    </div>
                </Router>
            </Provider>

        );
    }
}

export default App;
