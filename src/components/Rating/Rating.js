import React from 'react';
import './Rating.css';
import PT from 'prop-types';
import classNames from 'class-names';

const labels = {
    markAsSeen: 'I\'ve seen it',
    markAsUnseen: 'Haven\'t seen it'
};

class Rating extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pointsHover: null
        }
    }

    seenClickHandler() {
        console.log('seen clicked')
    }

    pointClickHandler(index) {
        this.props.onRatingSet(index + 1)
    }

    pointMouseOverHandler(index) {
        this.setState({pointsHover: index});
    }

    pointMouseLeaveHandler() {
        this.setState({pointsHover: null});
    }

    renderPoints() {
        const pointsNumber = 10;

        let points = [];

        for (let i = 0; i < pointsNumber; i++) {
            const classes = classNames({
                'rating__point-button': true,
                'rating__point-button--active': (i <= this.state.pointsHover && this.state.pointsHover !== null) || i < this.props.rating
            });

            points.push(<li className="rating__point" key={i}>
                <button className={classes}
                        onMouseOver={(e) => this.pointMouseOverHandler(i)}
                        onMouseLeave={(e) => this.pointMouseLeaveHandler()}
                        onClick={() => this.pointClickHandler(i)}>[ ]
                </button>
            </li>)
        }

        return points;

    }

    render() {
        return (
            <div className={`rating ${this.props.seen ? 'rating__seen--seen' : ''}`}>
                <a className="rating__seen" onClick={() => this.seenClickHandler()}>
                    <span
                        className="rating__seen-label">{!this.props.seen ? labels.markAsSeen : labels.markAsUnseen}</span>
                    <span className="rating__seen-icon">[ ]</span>
                </a>
                <ul className="rating__points">
                    {this.renderPoints()}
                </ul>
            </div>
        )
    }
}
;

Rating.propTypes = {
    seen: PT.bool,
    rating: PT.number, // or null
    onRatingSet: PT.func
};

export default Rating;