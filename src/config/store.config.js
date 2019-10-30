import { createBrowserHistory } from 'history'
import { createStore, compose ,applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers.config';
import thunk from 'redux-thunk';

export const history = createBrowserHistory()
const history_middleware = routerMiddleware(history)
const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        history_middleware, 
        thunk
      ),
      devtools,
    ),
  )
  return store
}