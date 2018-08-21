import { takeEvery } from 'redux-saga/effects';
// import repoActions from 'actions/repositoryActions';
import { FETCH_REPOSITORIES } from 'actions/repositoryActionTypes';

function* fetchRepositories() {
  try {
    // yield call();
    yield console.log('test');
  } catch (e) {
    console.log(e);
  }
}

function* watchFetchRepositories() {
  yield takeEvery(FETCH_REPOSITORIES, fetchRepositories);
}

export default watchFetchRepositories;
