import { combineReducers } from 'redux';
import  add  from './add';
import recipe from './recipe';

const combined = combineReducers({
  add,
  recipe,
});

export default combined;
