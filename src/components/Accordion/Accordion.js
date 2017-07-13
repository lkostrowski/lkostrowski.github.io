import React from 'react';
import propTypes from 'prop-types';
import classNames from 'class-names';
import './Accordion.css';

class Accordion extends React.Component {
    constructor(props) {
        super(props);

        const noop = () => {
        };

        this.onChange = this.props.onChange || noop;
        this.onClose = this.props.onClose || noop;
        this.onOpen = this.props.onOpen || noop;

    }

    open() {
        this.onOpen();
        this.onChange(true);

    }

    close() {
        this.onClose();
        this.onChange(false);

    }

    toggle() {
        if (this.props.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }

    render() {
        const contentClass = classNames({
            'accordion__content': true,
            'accordion__content--closed': !this.props.isOpen
        });

        return (
            <div className="accordion">
                <div className="accordion__bar" onClick={() => this.toggle()}>
                    {this.props.bar}
                </div>
                <div className={contentClass}>
                    {this.props.content}
                </div>
            </div>
        )
    }
}

Accordion.propTypes = {
    isOpen: propTypes.bool,
    bar: propTypes.element.isRequired,
    content: propTypes.element.isRequired,
    onOpen: propTypes.func,
    onClose: propTypes.func,
    onChange: propTypes.func
};

export default Accordion;