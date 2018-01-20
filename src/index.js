import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { todo } from './reducers/todo';
import App from './App';
import { combineReducers } from 'redux';

const combinedReducers = combineReducers({todo});

let store = createStore(
  combinedReducers
  ,
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

render(
  <Provider store={store}>
   <App />
  </Provider>,
  document.getElementById('root')
);
