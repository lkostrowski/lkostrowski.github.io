import React, {Component} from 'react';
import CoversSwitcher from '../../components/CoversSwitcher/CoversSwitcher';
import './IssueView.css';

import getIssueData from '../../services/SingleIssue.dummy';

class IssueView extends Component {
    render() {
        return (
            <div className="issue-view">
                Issue view

                <div style={{width: '500px'}}>
                    <CoversSwitcher covers={getIssueData().covers}/>
                </div>
            </div>
        );
    }
}

export default IssueView;
