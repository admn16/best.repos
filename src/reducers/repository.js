import * as actionTypes from 'actions/repositoryActionTypes';

const defaultState = {
  list: [],
  data: {},
  isDataLoading: false,
  isListLoading: false,
};

const repository = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_REPOSITORIES:
      return { ...state, list: [], isListLoading: true };

    case actionTypes.FETCH_REPOSITORIES_SUCCESS:
      return { ...state, list: action.payload, isListLoading: false };

    case actionTypes.FETCH_REPOSITORY:
      return { ...state, data: {}, isDataLoading: true };

    case actionTypes.FETCH_REPOSITORY_SUCCESS:
      return { ...state, data: action.payload, isDataLoading: false };

    default:
      return state;
  }
};

export default repository;
