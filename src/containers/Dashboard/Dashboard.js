import React, {Component} from 'react';
import './Dashboard.css';
import Sidebar from "../../components/Sidebar/Sidebar";
import CarouselList from "../../components/CarouselList/CarouselList";

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
                        <CarouselList headline={"Last seen"} />
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {

};

export default Dashboard;
