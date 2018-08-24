import { describe, it } from 'mocha';
import { expect } from 'chai';
import rootSaga from '../../../../src/client/sagas/combined';

describe('rootSaga', () => {
  it('should check the number of listeners', () => {
    const root = rootSaga();
    let rsEffect = root.next();
    expect(rsEffect.value.ALL.length).to.equal(4);
  });
});
