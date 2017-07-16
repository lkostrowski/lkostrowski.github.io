import React from 'react';
import Accordion from '../Accordion/Accordion';
import FilterName from '../FilterName/FilterName';
import FilterResults from '../FilterResults/FilterResults';
import PT from 'prop-types'
import './Filter.css'

const Filter = (props) => {

    const {
        filterName,
        filterItems,
        open,
        id,
        onOpened = () => {
        },
        onClosed = () => {
        },
        onResultsChanged = () => {
        }
    } = props;

    function opened() {
        onOpened(id);
    }

    function closed() {
        onClosed(id);
    }

    function itemClicked(item) {
        onResultsChanged(item);
    }

    return (
        <Accordion isOpen={open}
                   onOpen={() => opened()}
                   onClose={() => closed()}
                   bar={<FilterName active={open}
                                    name={filterName}/>}
                   content={<FilterResults onChange={(item) => itemClicked(item)}
                                           items={filterItems}/>}/>

    )

};

Filter.propTypes = {
    filterName: PT.string.isRequired,
    filterItems: PT.arrayOf(PT.shape({
        label: PT.string.isRequired,
        id: PT.string.isRequired,
        selected: PT.bool
    })).isRequired,
    open: PT.bool.isRequired,
    id: PT.number.isRequired,
    onOpened: PT.func,
    onClosed: PT.func,
    onResultsChanged: PT.func
};

export default Filter;