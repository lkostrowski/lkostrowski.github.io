import React, {Component} from 'react';
import CoversSwitcher from '../../components/CoversSwitcher/CoversSwitcher';
import './IssueView.css';

import getIssueData from '../../services/SingleIssue.dummy';
import Sidebar from "../../components/Sidebar/Sidebar";
import IssueDescription from "../../components/IssueDescription/IssueDescription";

class IssueView extends Component {
    getBackgroundStyle() {
        const bg = getIssueData().covers[0].src;

        return {
            backgroundImage: `url("${bg}")`
        }
    }

    render() {
        return (
            <div className="issue-view">
                <div className="issue-view__sidebar">
                    <Sidebar>
                        asd
                    </Sidebar>
                </div>
                <div className="issue-view__main" >
                    <div style={this.getBackgroundStyle()} className="issue-view__bg"/>
                    <div className="issue-view__content">
                        <div className="issue-view__column-left">
                            <CoversSwitcher className="issue-view__covers" covers={getIssueData().covers}/>
                        </div>
                        <div className="issue-view__column-right">
                            <IssueDescription />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default IssueView;
