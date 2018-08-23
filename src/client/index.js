import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import cr from './reducers/combined';
import AppContainer from './containers/App';
import rootSaga from './sagas/combined';
const sagaMiddleware = createSagaMiddleware();
import * as actions from './constants';
// then run the saga
const store = createStore(cr, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export const action = type => store.dispatch({ type });
action(actions.START_APPLICATION);

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);
