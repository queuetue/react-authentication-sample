import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import throttle from 'lodash/throttle'

import App from './App';
import loginService from './services/loginService';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers/reducers'
import {loadState, saveState} from './services/localStorage'
import {loginStartValidation} from './actions/login'

import './index.css';

const history = createBrowserHistory()
const loggerMiddleware = createLogger()
const persistedAuthState = {auth:loadState('auth')}

const store = createStore(connectRouter(history)(reducer),
  persistedAuthState,
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      thunkMiddleware,
      loggerMiddleware,
      loginService
      ),
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

let state = store.getState();

if (state.auth.authorized) {
  store.dispatch(loginStartValidation('token', state.auth.token))
}

store.subscribe(throttle(()=>{
  saveState('auth', store.getState().auth);
}), 1000);
