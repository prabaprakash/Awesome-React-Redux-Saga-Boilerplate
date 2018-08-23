import { all } from 'redux-saga/effects';
import addWatcher from './add';
import startWatcher from './start';
export default function* rootSaga() {
  yield all([addWatcher(), startWatcher()]);
}
