import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as actions from '../constants';
import { action } from '../helpers/actionCreator';

function* addnumber(action) {
  try {
    yield put({ type: actions.SAVE, number: '1' });
  } catch (e) {
    yield put({ type: 'ADD_FAILED', message: e.message });
  }
}

function* addWatcher() {
  yield takeEvery(actions.ADD, addnumber);
}
export default addWatcher;
