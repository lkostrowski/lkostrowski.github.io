import React from 'react';
import './Issue.css';

export default ({cover, metadata, className}) => {
    return (
        <div className={"issue " + className }>
            <img src={cover.src} alt={cover.alt} className="issue__cover"/>
            <div className="issue__metadata">
                <span className="issue__title">{metadata.title}</span>
            </div>
        </div>
    )
}