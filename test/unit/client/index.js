import { describe, it } from "mocha";
import { expect } from "chai";

import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, cleanup } from "@testing-library/react";
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

const store = createStore(
  reducers({}),
  {
    calc: { number: 0 }
  },
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
store.subscribe(() => console.log("state -> ", store.getState()));

describe("testing library react", () => {
  it("should trigger the ADD action", () => {
    const { getByTestId, getByText, getByValue } = renderWithRedux(<AppContainer />, store);
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("+"));
    expect(getByTestId("number").value).to.equal("2");
  });
  it("should trigger the SUB action", () => {
    const { getByTestId, getByText, getByValue } = renderWithRedux(<AppContainer />, store);
    fireEvent.click(getByText("-"));
    fireEvent.click(getByText("-"));
    expect(getByTestId("number").value).to.equal("0");
  });
});
