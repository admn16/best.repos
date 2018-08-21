import * as actionTypes from 'actions/repositoryActionTypes';

const defaultState = {
  list: [],
  selected: {},
  loading: false,
};

const repository = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_REPOSITORIES:
      return { ...state, loading: true };

    default:
      return state;
  }
};

export default repository;
