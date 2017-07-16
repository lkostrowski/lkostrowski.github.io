import React from 'react';
import PT from 'prop-types';
import SingleIssueInterface from '../../interfaces/SingleIssue';
import IssuesCarousel from "../IssuesCarousel/IssuesCarousel";
import './CarouselList.css'

//temp
import getIssues from '../../services/IssuesProvider.dummy';


const CarouselList = ({issues = getIssues(), headline}) => {
    return (
        <div className="carousel-list">
            <h2 className="carousel-list__headline">
                {headline}
            </h2>
            <IssuesCarousel issues={issues}/>
        </div>
    )
};

CarouselList.propTypes = {
    issues: PT.arrayOf(PT.shape(SingleIssueInterface)),
    headline: PT.string.isRequired
};


export default CarouselList;