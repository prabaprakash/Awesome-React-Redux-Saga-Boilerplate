import { describe, it } from "mocha";
import { expect } from "chai";

import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, cleanup } from "react-testing-library";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();

import reducers from "../../../src/client/reducers/combined";
import AppContainer from "../../../src/client/containers/App";
import rootSaga from "../../../src/client/sagas/combined";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


function renderWithRedux(ui, store) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}

describe.only("actions", () => {
  it("should trigger the ADD action", () => {
    const store = createStore(
      reducers,
      {
        calc: { number: 0 }
      },
      composeEnhancers(applyMiddleware(sagaMiddleware))
    );
    store.subscribe(()=> console.log(store.getState()));
    sagaMiddleware.run(rootSaga); 
    const { getByTestId, getByText, getByValue } = renderWithRedux(<AppContainer />, store);
    fireEvent.click(getByText("-"));
    fireEvent.click(getByText("+"));
    expect(getByTestId("number").value).to.equal("0");
  });
});
