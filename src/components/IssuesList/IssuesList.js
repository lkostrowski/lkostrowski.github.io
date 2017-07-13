import React from 'react';
import Issue from '../Issue/Issue';
import './IssuesList.css';
import PT from 'prop-types';
import {Link} from "react-router-dom";

const IssuesList = ({issues}) => {
    return (
        <ul className="issues-list">
            {issues.map((issue, key) => (
                <Link to={`/issue/${issue.id}`}>
                <Issue className="issues-list__issue" {...issue} key={key}/>
                </Link>
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
        }),
        id: PT.number.isRequired
    }))
};

export default IssuesList;