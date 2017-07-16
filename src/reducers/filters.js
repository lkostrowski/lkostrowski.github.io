import initialState from '../containers/Filters/initial-state'; //temp

import {CONSTANTS} from '../actions/filters';

const filtersState = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.OPEN:
            return state.map(filter => {
                if (filter.id === action.id) {
                    filter.open = true;
                }

                return filter;
            });

        case CONSTANTS.CLOSE:
            return state.map(filter => {
                if (filter.id === action.id) {
                    filter.open = false;
                }

                return filter;
            });
        default:
            return state;
    }

};

export default filtersState;