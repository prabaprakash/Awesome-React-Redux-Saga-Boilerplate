import { action } from '../helpers/actionCreator';
import * as actions from '../constants/index';

export const add = text => action(actions.ADD, { text });
