import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './assets/styles/index.css';

const history = createBrowserHistory();
const store = configureStore(history, {});

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();