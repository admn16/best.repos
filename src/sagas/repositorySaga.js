import { call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_REPOSITORIES,
  FETCH_REPOSITORIES_SUCCESS,
  FETCH_REPOSITORY,
} from 'actions/repositoryActionTypes';
import { fetchRepositoriesByTag, fetchRepositoryByAuthorName } from 'services/githubApi';

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

function* fetchRepository(action) {
  try {
    const repo = yield call(fetchRepositoryByAuthorName, action.payload);
    console.log(repo);
  } catch (e) {
    console.log(e);
  }
}

export default [
  takeLatest(FETCH_REPOSITORIES, fetchRepositories),
  takeLatest(FETCH_REPOSITORY, fetchRepository),
];
