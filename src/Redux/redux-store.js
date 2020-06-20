import { createStore, combineReducers } from 'redux';
import sideBarReducer from './sideBarReducer';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sideBarReducer,
    usersPage: usersReducer 
});

let store = createStore(reducers);

window.store = store;

export default store;