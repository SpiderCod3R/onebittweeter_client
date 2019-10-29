import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/scss/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import Store from './configureStore';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

serviceWorker.unregister();
