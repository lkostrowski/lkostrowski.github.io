import React from 'react';
import Issue from '../Issue/Issue';
import './IssuesList.css';
import PT from 'prop-types';
import {Link} from "react-router-dom";

const IssuesList = ({issues, wide}) => {
    return (
        <ul className={`issues-list ${wide? 'issues-list--wide' : ''}`}>
            {issues.map((issue, key) => (
                <Link to={`/issue/${issue.id}`} key={key}>
                    <Issue className="issues-list__issue" {...issue}/>
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
    })),
    wide: PT.bool
};

export default IssuesList;