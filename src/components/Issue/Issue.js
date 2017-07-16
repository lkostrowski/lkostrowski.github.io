import React from 'react';
import './Issue.css';

import IssueInterface from './../../interfaces/SingleIssue';

const Issue = ({cover, metadata, className = ''}) => {
    return (
        <div className={"issue " + className }>
            <img src={cover.src} alt={cover.alt} className="issue__cover"/>
            <div className="issue__metadata">
                <span className="issue__title">{metadata.title}</span>
            </div>
        </div>
    )
};

export default Issue;

Issue.propTypes = IssueInterface;