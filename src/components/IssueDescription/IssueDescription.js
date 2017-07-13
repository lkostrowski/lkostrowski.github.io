import React from 'react';

import './IssueDescription.css';
import InfoAccordion from "../InfoAccordion/InfoAccordion";

const description = [
    {
        label: 'Creators',
        data: ["Garth Ennis", "Frank Miller"],
        open: false
    },
    {
        label: 'Issue information',
        data: ["Original name: Batman #1", "Volume: 'Batman ongoing", "Issue number: 1", "Date: 1.09.1931"],
        open: true
    },
    {
        label: 'Description',
        data: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, consectetur deserunt ducimus earum eligendi iste laboriosam laborum natus nemo nostrum.',
        open: false
    },
    {
        label: 'Creators',
        data: ["Garth Ennis", "Frank Miller"],
        open: false
    },
    {
        label: 'Issue information',
        data: ["Original name: Batman #1", "Volume: 'Batman ongoing", "Issue number: 1", "Date: 1.09.1931"],
        open: false
    },
    {
        label: 'Description',
        data: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, consectetur deserunt ducimus earum eligendi iste laboriosam laborum natus nemo nostrum.',
        open: false
    },
    {
        label: 'Creators',
        data: ["Garth Ennis", "Frank Miller"],
        open: false
    },
    {
        label: 'Issue information',
        data: ["Original name: Batman #1", "Volume: 'Batman ongoing", "Issue number: 1", "Date: 1.09.1931"],
        open: false
    },
    {
        label: 'Description',
        data: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, consectetur deserunt ducimus earum eligendi iste laboriosam laborum natus nemo nostrum.',
        open: false
    },
    {
        label: 'Issue information',
        data: ["Original name: Batman #1", "Volume: 'Batman ongoing", "Issue number: 1", "Date: 1.09.1931"],
        open: false
    },
    {
        label: 'Description',
        data: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, consectetur deserunt ducimus earum eligendi iste laboriosam laborum natus nemo nostrum.',
        open: false
    }
];

const IssueDescription = () => {
    return (
        <div className="issue-description">
            {description.map((entry, i) => {
                return <InfoAccordion className="issue-description__section" isOpen={entry.open} label={entry.label} data={entry.data} key={i}/>
            })}
        </div>

    );
};

export default IssueDescription;

