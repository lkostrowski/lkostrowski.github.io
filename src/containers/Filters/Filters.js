import React from 'react';
import Filter from '../../components/Filter/Filter';
import PT from 'prop-types';
import {connect} from "react-redux";
import actions from '../../actions/filters';

class Filters extends React.Component {
    filterOpened(filterId) {
        this.props.onFilterOpened(filterId);
    }

    filterClosed(filterId) {
        this.props.onFilterClosed(filterId);
    }

    itemChangedHandler(itemId, filterId) {
        this.props.onItemToggled(filterId, itemId);
    }

    render() {
        return (
            <div className="filters">
                {this.props.filters.map((filter, i) => {
                    return (
                        <Filter id={filter.id}
                                key={i}
                                open={filter.open}
                                onOpened={id => this.filterOpened(id)}
                                onClosed={id => this.filterClosed(id)}
                                onResultsChanged={resultItem => this.itemChangedHandler(resultItem, filter.id) }
                                filterName={filter.name}
                                filterItems={filter.items}
                        />
                    )
                })}
            </div>
        )
    }
}

Filters.propTypes = {
    filters: PT.array.isRequired,
    onFilterOpened: PT.func.isRequired,
    onFilterClosed: PT.func.isRequired,
    onItemToggled: PT.func.isRequired
};

function mapStateToProps(state) {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFilterOpened: (id) => dispatch(actions.open(id)),
        onFilterClosed: (id) => dispatch(actions.close(id)),
        onItemToggled: (filterId, itemId) => dispatch(actions.toggleItem(filterId, itemId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);