import { createBrowserHistory } from 'history'
import { createStore, compose ,applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers';
import thunk from 'redux-thunk';

// Routes imports
// import { routerMiddleware } from 'react-router-redux'

export const history = createBrowserHistory()
const history_middleware = routerMiddleware(history)

// const Store = createStore(createRootReducer, applyMiddleware(history_middleware, thunk));

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        history_middleware, 
        thunk
      ),
    ),
  )

  return store
}



// export default Store;