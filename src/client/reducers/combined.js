import { combineReducers } from 'redux';
import  calc  from './calc';

const combined = combineReducers({
  calc,
});

export default combined;
