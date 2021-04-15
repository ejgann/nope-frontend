import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
    //  an action is sent to reducer and deciding, based on how it's set up, what we want to update about current store. reducer returns new version of the store.


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  // We wrap components we want to have access to the store inside Provider tags

  , document.getElementById('root'));
