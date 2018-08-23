import * as actions from '../constants';

const add = (state = {}, action) => {
  switch (action.type) {
  case actions.SAVE:
    return Object.assign({}, state, {
      number: action.number,
    });
  default:
    return state;
  }
};

export default add;
