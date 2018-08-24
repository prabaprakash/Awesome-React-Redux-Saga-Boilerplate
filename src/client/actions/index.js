import { action } from '../helpers/actionCreator';
import * as actions from '../constants/index';

export const add = number => action(actions.ADD, { number });

export const sub = number => action(actions.SUB, { number });

export const change = number => action(actions.CHANGE, { number });
