import { combineReducers } from 'redux';
import reducer from './reducer-waste';
import UserFavorites from './reducer-favorites';

//combine all data into one object
const allReducers = combineReducers({
    waste: reducer
});

export default allReducers;