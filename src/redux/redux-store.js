import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import authReducer from './auth-reducer';
import messagePageReducer from './messagesPage-reducer';
import profilePageReducer from './profilePage-reducer';
import sideBarReducer from './sideBar-reducer';
import usersReducer from './users-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    messagesPage: messagePageReducer,
    profilePage: profilePageReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;
