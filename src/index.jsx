import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/scss/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import TrendingTopicsReducer from './containers/TrendingTopicsContainer/reducer.jsx';

const Reducers = combineReducers({
  trendings: TrendingTopicsReducer
});

const Store = createStore(Reducers);

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

serviceWorker.unregister();
