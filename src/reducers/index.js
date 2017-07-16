import {combineReducers} from 'redux'
import filters from './filters';
import shelf from './pages/shelf';

export default combineReducers({
    filters,
    pagesShelf: shelf
});