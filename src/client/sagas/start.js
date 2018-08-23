import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as actions from '../constants';
import { callFetch } from '../services/api';
function* initalize() {
  try {
    const recipes = yield call(callFetch, '/recipes');
    yield put({
      type: actions.ADD_RECIPES,
      recipes: JSON.parse(recipes.response),
    });
  } catch (e) {
    yield put({ type: 'START_APPLICATION_FAILED', recipes: [] });
  }
}

function* startWatcher() {
  yield takeEvery(actions.START_APPLICATION, initalize);
}
export default startWatcher;
