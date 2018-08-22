import React from 'react'
import expect from 'expect'
import { shallow, mount } from 'enzyme'
import App from '../../../../src/client/components/App'
const wrapper = shallow(<HelloWorld />)
describe('App Component', () => {
  it('renders div', () => {
    expect(wrapper.find('div').text()).toEqual('Hello World')
  })
  it('renders p', () => {
    expect(wrapper.find('p').text()).toEqual('Welcome to my world')
  })
})