import reducers from './reducers/index';
import {createStore, applyMiddleware} from 'redux';

import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(),
    ));

export default store;