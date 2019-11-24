import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducer'
import logger from 'redux-logger'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let persistedUser = {};
if(sessionStorage.getItem('user')) {
    persistedUser = JSON.parse(sessionStorage.getItem('user'))
}

const persistedState = {
    user: persistedUser
};

const store = createStore(
    reducers,
    persistedState,
    composeEnhancer(applyMiddleware(thunk, logger)),
);

store.subscribe(() => {
    sessionStorage.setItem('user', JSON.stringify(store.getState().user));
});

export default store;