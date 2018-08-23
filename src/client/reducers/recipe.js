import * as actions from '../constants';

const recipe = (state = {}, action) => {
  switch (action.type) {
  case actions.ADD_RECIPES:
    return Object.assign({}, state, {
      recipes: action.recipes,
    });
  default:
    return state;
  }
};

export default recipe;
