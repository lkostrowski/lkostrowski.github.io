import {CONSTANTS} from '../../actions/sidebar';

// temp
const initialState = {
    sidebarOpen: true
};

const shelf = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.TOGGLE:
            return Object.assign({},state, {sidebarOpen: !state.sidebarOpen});
        default:
            return state;
    }
};

export default shelf;