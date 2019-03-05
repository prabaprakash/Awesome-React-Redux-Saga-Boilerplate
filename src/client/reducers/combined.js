import { combineReducers } from 'redux';
import  calc  from './calc';
import { connectRouter } from 'connected-react-router'

const combined= (history) => combineReducers({
  calc,
  router: connectRouter(history),
});

export default combined;
