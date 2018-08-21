import * as actionTypes from 'actions/repositoryActionTypes';

const defaultState = {
  repositories: [],
  selected: {},
  loading: false,
};

const repository = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_REPOSITORIES:
      return { ...state, repositories: [], loading: true };

    case actionTypes.FETCH_REPOSITORIES_SUCCESS:
      return { ...state, repositories: action.payload };

    default:
      return state;
  }
};

export default repository;
