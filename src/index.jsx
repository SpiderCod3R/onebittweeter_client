import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/scss/index.scss';
import AppRouting from './app.routing'
// import registerServiceWorker from './registerServiceWorker';
import * as serviceWorker from './config/serviceWorker';
import { Provider } from 'react-redux';
import Store, { history } from './config/store.config';
import { ConnectedRouter } from 'react-router-redux'

ReactDOM.render(
  <Provider store={Store}>
    <ConnectedRouter history={history}>
      <AppRouting />
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root')
);

// registerServiceWorker();
serviceWorker.unregister();