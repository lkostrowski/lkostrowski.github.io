import React, {Component} from 'react';
import './Dashboard.css';
import Sidebar from "../../components/Sidebar/Sidebar";

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <div className="dashboard__sidebar">
                    <Sidebar>
                        menu
                    </Sidebar>
                </div>
                <div className="dashboard__main">
                    <div className="dashboard__content">
                        dupa
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {

};

export default Dashboard;
