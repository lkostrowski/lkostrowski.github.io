import React from 'react';
import Accordion from '../Accordion/Accordion';
import FilterName from '../FilterName/FilterName';
import FilterResults from '../FilterResults/FilterResults';
import PT from 'prop-types'
import './Filter.css'

class Filter extends React.Component {
    constructor(props) {
        super(props);

        // temp
        this.state = {active: props.open || false, selected: []};
    }

    filterChangeHandler(val) {
        this.setState({active: val});
    }

    opened() {
        this.setState({active: true});

    }

    closed() {
        this.setState({active: false});
    }

    onItemClicked(item) {
        // Add/remove from selected array and trigger action
    }

    render() {
        return (
            <Accordion isOpen={this.state.active}
                       onOpen={() => this.opened()}
                       onClose={() => this.closed()}
                       bar={<FilterName active={this.state.active} name={this.props.filterName}/>}
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
    open: PT.bool
};

export default Filter;