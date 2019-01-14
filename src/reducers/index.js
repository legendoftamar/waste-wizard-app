import { combineReducers } from 'redux';
import UserReducer from './reducer-users';
import UserFavorites from './reducer-favorites';

//combine all data into one object
const allReducers = combineReducers({
    users: UserReducer,
    favoriteUser: UserFavorites
});

export default allReducers;