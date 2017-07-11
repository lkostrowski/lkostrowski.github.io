import React from 'react';
import './Issue.css';

import PT from 'prop-types';

const Issue = ({cover, metadata, className}) => {
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

Issue.propTypes = {
    cover: PT.shape({
        src:  PT.string.isRequired,
        alt:  PT.string
    }),
    metadata: PT.shape({
        title: PT.string.isRequired
    }),
    className: PT.string
};