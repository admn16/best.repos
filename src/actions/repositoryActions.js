import * as actionTypes from './repositoryActionTypes';

export const fetchRepositories = payload => ({
  type: actionTypes.FETCH_REPOSITORIES,
  payload,
});

export const fetchRepositoriesSuccess = payload => ({
  type: actionTypes.FETCH_REPOSITORIES,
  payload,
});

export const fetchRepository = payload => ({
  type: actionTypes.FETCH_REPOSITORY,
  payload,
});
