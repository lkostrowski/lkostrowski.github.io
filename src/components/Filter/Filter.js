import React from 'react';
import Accordion from '../Accordion/Accordion';
import FilterName from '../FilterName/FilterName';
import FilterResults from '../FilterResults/FilterResults';
import PT from 'prop-types'
import './Filter.css'

class Filter extends React.Component {

    filterChangeHandler(val) {
        this.setState({active: val});
    }

    opened() {
        this.setState({active: true});


        this.props.accordionToggled({open: true});
    }

    closed() {
        this.setState({active: false});

        this.props.accordionToggled({open: false});
    }

    onItemClicked(item) {
        this.props.filterChanged(item);
    }

    render() {
        return (
            <Accordion isOpen={this.props.open}
                       onOpen={() => this.opened()}
                       onClose={() => this.closed()}
                       bar={<FilterName active={this.props.open}
                                        name={this.props.filterName}/>}
                       content={<FilterResults onChange={(item) => this.onItemClicked(item)}
                                               items={this.props.filterItems}/>}/>

        )
    }
}

Filter.propTypes = {
    filterName: PT.string.isRequired,
    filterItems: PT.arrayOf(PT.shape({
        label: PT.string.isRequired,
        id: PT.string.isRequired,
        selected: PT.bool
    })).isRequired,
    open: PT.bool,
    filterChanged: PT.func,
    accordionToggled: PT.func
};

export default Filter;