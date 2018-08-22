import * as actionTypes from 'actions/repositoryActionTypes';

const defaultState = {
  list: [],
  repository: {},
  loading: false,
};

const repository = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_REPOSITORIES:
      return { ...state, list: [], loading: true };

    case actionTypes.FETCH_REPOSITORIES_SUCCESS:
      return { ...state, list: action.payload };

    default:
      return state;
  }
};

export default repository;
