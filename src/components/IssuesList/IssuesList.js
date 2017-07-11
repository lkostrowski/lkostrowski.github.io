import React from 'react';
import Issue from '../Issue/Issue';
import './IssuesList.css';
import PT from 'prop-types';

const IssuesList = ({issues}) => {
    return (
        <ul className="issues-list">
            {issues.map((issue, key) => (
                <Issue className="issues-list__issue" {...issue} key={key}/>
            ))}
        </ul>
    )
};

IssuesList.propTypes = {
    issues: PT.arrayOf(PT.shape({
        cover: PT.shape({
            src: PT.string.isRequired,
            alt: PT.string
        }),
        metadata: PT.shape({
            title: PT.string.isRequired
        })
    }))
};

export default IssuesList;