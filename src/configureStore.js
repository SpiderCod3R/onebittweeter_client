import { createStore, applyMiddleware } from 'redux';
import Reducers from './reducers';
import thunk from 'redux-thunk';

// Routes imports
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'react-router-redux'

export const history = createBrowserHistory()
const history_middleware = routerMiddleware(history)
 // End routes imports

const Store = createStore(Reducers, applyMiddleware(history_middleware, thunk));

export default Store;