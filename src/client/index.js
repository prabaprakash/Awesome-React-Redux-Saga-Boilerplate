import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import createRouteReducers from './reducers/combined';

import rootSaga from './sagas/combined';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import * as actions from './constants';

import { createBrowserHistory } from 'history'
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router'
const history = createBrowserHistory();

// then run the saga
const store = createStore(createRouteReducers(history), composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware)));
sagaMiddleware.run(rootSaga);
export const action = type => store.dispatch({ type });
action(actions.INITALIZE_APPLICATION);

import AppContainer from './containers/App';
import Error from './components/Error';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={AppContainer}/>
          <Route render={() => <Error/> } />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
