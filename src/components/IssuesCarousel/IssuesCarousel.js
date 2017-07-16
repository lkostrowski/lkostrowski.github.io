import React from 'react';
import Carousel from 'react-slick';
import Issue from "../Issue/Issue";
import SingleIssueInterface from '../../interfaces/SingleIssue';
import PT from 'prop-types';

import "./IssuesCarousel.css";

const carouselSettings = {
    swipe: true,
    arrows: false,
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 6
};

const IssuesCarousel = ({issues}) => {
    return (
        <div className="issues-carousel">
            <Carousel {...carouselSettings} >
                {issues.map((issue, index) => {
                    return <div key={index} className="issues-carousel__issue">
                        <Issue
                            cover={issue.cover}
                            metadata={issue.metadata}
                        />
                    </div>
                })}
            </Carousel>
        </div>
    )
};

IssuesCarousel.propTypes = {
    issues: PT.arrayOf(PT.shape(SingleIssueInterface))
};

export default IssuesCarousel;