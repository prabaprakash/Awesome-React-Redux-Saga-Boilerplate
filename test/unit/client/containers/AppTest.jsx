import { describe, it } from 'mocha';
import shallowWithStore from './shallowWithStore';
import { createMockStore } from 'redux-test-utils';
import App from '../../../../src/client/containers/App';
import Enzyme from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());

describe('App Container', () => {
  it('should render successfully provided by store', () => {
    const testState = {
      calc: { number: 100 },
    };
    const store = createMockStore(testState);
    const component = shallowWithStore(<App />, store);
    expect(component).to.be.a('object');
  });
});
