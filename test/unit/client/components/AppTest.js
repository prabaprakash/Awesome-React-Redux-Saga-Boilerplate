import React from 'react';
import expect from 'expect';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow, mount } from 'enzyme';
import App from '../../../../src/client/components/App';
let wrapper = shallow(<App />);
describe('App Component', () => {
  it('renders div', () => {
    expect(wrapper.find('div').text()).toContain('Welcome');
  });
  it('renders react player div', () => {
    wrapper = shallow(<App number="1"/>);
    expect(wrapper.find('div').text()).toContain('<ReactPlayer />');
  });
});
