import { describe, it, beforeEach } from 'mocha';
import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import td from 'testdouble';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import App from '../../../../src/client/components/App';

describe.only('App Component', () => {
  let wrapper, addspy, subspy, changespy;
  beforeEach(function () {
    addspy = td.function();
    subspy = td.function();
    changespy = td.function();
    wrapper = mount(<App add={addspy} sub={subspy} change={changespy} number= { 100 }/>);
  });
  it('renders div', () => {
    expect(wrapper.find('div').exists()).to.be.true;
    expect(wrapper.props().number).to.equal(100);
  });
  it('should render two button', () => {
    expect(wrapper.find('button').hostNodes()).to.have.lengthOf(2);
  });
  it('verify add click', () => {
    wrapper.find('button').hostNodes().at(0).simulate('click');
    td.verify(addspy(100));
  });
  it('verify sub click', () => {
    wrapper.find('button').hostNodes().at(1).simulate('click');
    td.verify(subspy(100));
  });
  it('should call text box value change event', () => {
    wrapper.instance().handleChange({ 'target': { 'value': 300 } });
    td.verify(changespy(300));
  });
});
