import * as actions from '../constants';

const calc = (state = {}, action) => {
  switch (action.type) {
  case actions.SAVE:
    return Object.assign({}, state, {
      number: action.number,
    });
  default:
    return state;
  }
};

export default calc;
