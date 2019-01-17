import { combineReducers } from 'redux';
import reducer from './reducer-waste';
import reducer_favorites from './reducer-favorites';
import reducer_search from './reducer-search';

//combine all data into one object
const allReducers = combineReducers({
    waste: reducer,
    favorites: reducer_favorites,
    search: reducer_search
});

export default allReducers;