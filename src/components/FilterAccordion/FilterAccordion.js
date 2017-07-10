import React from 'react';
import propTypes from 'prop-types';
import classNames from 'class-names';
import './FilterAccordion.css';

class FilterAccordion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: props.isOpen || false
        };

        const noop = () => {
        };

        this.onChange = this.props.onChange || noop;
        this.onClose = this.props.onClose || noop;
        this.onOpen = this.props.onOpen || noop;

    }

    open() {
        this.setState({isOpen: true});
        this.onOpen();
        this.onChange(this.state.isOpen);

    }

    close() {
        this.setState({isOpen: false});
        this.onClose();
        this.onChange(this.state.isOpen);

    }

    toggle() {
        if (this.state.isOpen) {
            this.close();
        } else {
            this.open();
        }
        this.onChange(this.state.isOpen);
    }

    render() {
        const contentClass = classNames({
            'filter-accordion__content': true,
            'filter-accordion__content--closed': !this.state.isOpen
        });

        return (
            <div className="filter-accordion">
                <div className="filter-accordion__bar" onClick={() => this.toggle()}>
                    {this.props.bar}
                </div>
                <div className={contentClass}>
                    {this.props.content}
                </div>
            </div>
        )
    }
}

FilterAccordion.propTypes = {
    isOpen: propTypes.bool,
    bar: propTypes.element.isRequired,
    content: propTypes.element.isRequired,
    onOpen: propTypes.func,
    onClose: propTypes.func,
    onChange: propTypes.func
};

export default FilterAccordion;