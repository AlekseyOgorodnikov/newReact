import { createStore, combineReducers } from 'redux';
import sideBarReducer from './sideBarReducer';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sideBarReducer
});

let store = createStore(reducers);

export default store;