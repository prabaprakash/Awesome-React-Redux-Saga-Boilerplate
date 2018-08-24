import { describe, it } from 'mocha';
import { expect } from 'chai';
import calc from '../../../../src/client/reducers/calc';
import * as actions from '../../../../src/client/constants';
describe('calc Reducer', ()=>{
  it('for action save, set number', () => {
    const oldState = {};
    const action = {
      type: actions.SAVE,
      number: 1000,
    };
    const newState = calc(oldState, action);
    expect(newState.number).to.equal(1000);
  });
  it('for action default, return old state', () => {
    const oldState = {};
    const action = {
    };
    const newState = calc(oldState, action);
    expect(newState).to.equal(oldState);
  });
});
