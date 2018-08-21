import { call, put, takeLatest } from 'redux-saga/effects';
// import repoActions from 'actions/repositoryActions';
import { FETCH_REPOSITORIES, FETCH_REPOSITORIES_SUCCESS } from 'actions/repositoryActionTypes';
import { fetchRepositoriesByTag } from 'services/githubApi';

function* fetchRepositories(action) {
  try {
    const repos = yield call(fetchRepositoriesByTag, action.payload);
    yield put({
      type: FETCH_REPOSITORIES_SUCCESS,
      payload: repos.items,
    });
  } catch (e) {
    console.log(e);
  }
}

function* watchFetchRepositories() {
  yield takeLatest(FETCH_REPOSITORIES, fetchRepositories);
}

export default watchFetchRepositories;
