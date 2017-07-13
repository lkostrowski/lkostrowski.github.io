import React from 'react';
import PT from 'prop-types';
import Carousel from 'react-slick';

import './CoversSwitcher.css';

const carouselSettings = {
    swipe: true,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
};

const CoversSwitcher = ({covers}) => {
    return (
        <div className="covers-switcher">
            <Carousel {...carouselSettings}>
                {covers.map((cover, i) => {
                    return <img className="covers-switcher__cover" src={cover.src} alt={cover.alt} key={i}/>
                })}
            </Carousel>
        </div>
    )

};

export default CoversSwitcher;

CoversSwitcher.propTypes = {
    covers: PT.arrayOf(PT.shape({
        src: PT.string.isRequired,
        alt: PT.string,
        active: PT.bool
    })).isRequired
};
