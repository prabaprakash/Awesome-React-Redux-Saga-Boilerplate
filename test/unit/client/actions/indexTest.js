import { describe, it } from 'mocha';
import { expect } from 'chai';
import * as action from '../../../../src/client/actions';
import * as actions from '../../../../src/client/constants';

describe('actions', () => {
  it('should trigger the ADD action', () => {
    const number = 100;
    const response = action.add(number);

    expect(response.type).to.deep.equal(actions.ADD);
    expect(response.payload.number).to.deep.equal(100);
  });
  it('should trigger the SUB action', () => {
    const number = 100;
    const response = action.sub(number);

    expect(response.type).to.deep.equal(actions.SUB);
    expect(response.payload.number).to.deep.equal(100);
  });
  it('should trigger the CHANGE action', () => {
    const number = 100;
    const response = action.change(number);

    expect(response.type).to.deep.equal(actions.CHANGE);
    expect(response.payload.number).to.deep.equal(100);
  });
});
