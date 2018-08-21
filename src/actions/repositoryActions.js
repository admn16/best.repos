import * as actionTypes from './repositoryActionTypes';

export const fetchRepositories = payload => ({
  type: actionTypes.FETCH_REPOSITORIES,
  payload,
});
