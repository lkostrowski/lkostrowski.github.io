import React, {Component} from 'react';
import './Dashboard.css';
import Sidebar from "../../components/Sidebar/Sidebar";
import CarouselList from "../../components/CarouselList/CarouselList";
import MenuItem from "../../components/MenuItem/MenuItem";
import {Link} from "react-router-dom";

class Dashboard extends Component {

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard__sidebar">
                    <Sidebar>
                        <Link className="dashboard__menu-link" to="/shelf">
                            <MenuItem label="Shelf" className="dashboard__menu-item"/>
                        </Link>
                    </Sidebar>
                </div>
                <div className="dashboard__main">
                    <div className="dashboard__content">
                        <CarouselList headline={"Last seen"}/>
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {};

export default Dashboard;
