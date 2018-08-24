import {  put, takeEvery } from 'redux-saga/effects';
import * as actions from '../constants';

export function* initalize() {
  try {
    yield put({
      type: actions.SAVE,
      number: 100,
    });
  } catch (e) {
    yield put({ type: 'INITALIZE_APPLICATION_FAILED', number: null });
  }
}

export function* initalizeWatcher() {
  yield takeEvery(actions.INITALIZE_APPLICATION, initalize);
}

export function* addnumber(action) {
  try {
    yield put({ type: actions.SAVE, number: action.payload.number + 1 });
  } catch (e) {
    yield put({ type: 'ADD_FAILED', message: e.message });
  }
}

export function* addWatcher() {
  yield takeEvery(actions.ADD, addnumber);
}
export default addWatcher;


export function* changenumber(action) {
  try {
    yield put({ type: actions.SAVE, number: action.payload.number });
  } catch (e) {
    yield put({ type: 'CHANGE_FAILED', message: e.message });
  }
}

export function* changeWatcher() {
  yield takeEvery(actions.CHANGE, changenumber);
}


export function* subnumber(action) {
  try {
    yield put({ type: actions.SAVE, number: action.payload.number - 1 });
  } catch (e) {
    yield put({ type: 'SUB_FAILED', message: e.message });
  }
}

export function* subWatcher() {
  yield takeEvery(actions.SUB, subnumber);
}
