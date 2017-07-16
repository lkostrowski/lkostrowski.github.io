import React from 'react';
import './Rating.css';
import PT from 'prop-types';

const labels = {
    markAsSeen: 'I\'ve seen it',
    markAsUnseen: 'Haven\'t seen it'
};

const Rating = ({seen = false, rating = null}) => {

    function seenClickHandler() {
        console.log('seen clicked')
    }

    function pointClickHandler(index) {
        console.log('point clicked ' + index)
    }

    function renderPoints() {
        const pointsNumber = 10;

        let points = [];

        for (let i = 0; i < pointsNumber; i++) {
            points.push(<li className="rating__point" key={i}>
                <button className="rating__point-button" onClick={() => pointClickHandler(i)}>[ ]</button>
            </li>)
        }

        return points;

    }

    return (
        <div className={`rating ${seen? 'rating__seen--seen' : ''}`}>
            <a className="rating__seen" onClick={() => seenClickHandler()}>
                <span className="rating__seen-label">{!seen ? labels.markAsSeen : labels.markAsUnseen}</span>
                <span className="rating__seen-icon">[ ]</span>
            </a>
            <ul className="rating__points">
                {renderPoints()}
            </ul>
        </div>
    )
};

Rating.propTypes = {
    seen: PT.bool,
    rating: PT.number // or null
};

export default Rating;