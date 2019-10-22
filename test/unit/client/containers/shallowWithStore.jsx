import { shallow } from 'enzyme';

import { Provider } from 'react-redux';
import React from 'react';

const shallowWithStore = (Component, store) => {
  return shallow(<Provider store={store}>{Component}</Provider>);
};

export default shallowWithStore;
