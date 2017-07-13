import React from 'react';

import PT from 'prop-types';
import Accordion from "../Accordion/Accordion";

import './InfoAccordion.css';
import IconPlus from "../Icons/IconPlus";
import IconMinus from "../Icons/IconMinus";

import classNames from 'class-names';

class InfoAccordion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: this.props.isOpen
        }
    }

    renderLabel() {
        const className = classNames({
            'info-accordion__label': true,
            'info-accordion__label--active': this.state.isOpen
        });

        return (
            <div className={className}>
                <span className="info-accordion__label-text">{this.props.label}</span>
                {!this.state.isOpen ?
                    <IconPlus fill="inherit"
                              className="info-accordion__label-icon info-accordion__label-icon--plus"/> :
                    <IconMinus fill="inherit"
                               className="info-accordion__label-icon info-accordion__label-icon--minus"/>}
            </div>
        )
    }

    renderContent() {
        return (
            <div className="info-accordion__content ">
                {typeof this.props.data === 'object' && this.props.data.map((entry, i) => {
                    return (<div className="info-accordion__entry" key={i}>
                        {entry}
                    </div>)
                })}
                {typeof this.props.data === 'string' && <div className="info-accordion__entry">
                    { this.props.data}
                </div>}

            </div>
        )
    }

    updateState(val) {
        this.setState({isOpen: val});
    }

    render() {
        return (
            <div className={"info-accordion " + this.props.className}>
                <Accordion onChange={(val) => this.updateState(val)}
                           isOpen={this.state.isOpen}
                           bar={this.renderLabel()}
                           content={this.renderContent()}/>
            </div>
        )
    }
}

InfoAccordion.propTypes = {
    label: PT.string.isRequired,
    data: PT.oneOfType([PT.arrayOf(PT.string), PT.string]).isRequired,
    isOpen: PT.bool,
    className: PT.string
};

export default InfoAccordion;