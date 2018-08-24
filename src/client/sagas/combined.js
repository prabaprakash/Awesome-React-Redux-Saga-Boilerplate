import { all } from 'redux-saga/effects';
import * as watcher from './calc';
export default function* rootSaga() {
  yield all([watcher.addWatcher(), watcher.subWatcher(), watcher.changeWatcher(), watcher.initalizeWatcher()]);
}
