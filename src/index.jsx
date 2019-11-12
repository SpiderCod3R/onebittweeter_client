import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'

import './stylesheets/scss/index.scss';
import App from './App';
import * as serviceWorker from './config/serviceWorker';
import configureStore, { history } from './config/store.config';


const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root')
);

serviceWorker.unregister();
