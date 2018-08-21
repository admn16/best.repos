import * as actionTypes from 'actions/repositoryActionTypes';

const defaultState = {
  list: [],
  selected: {},
};

const repository = (state = defaultState, action) => {
  switch (action.type) {
    case [actionTypes.FETCH_REPOSITORIES]:
      return state;

    default:
      return state;
  }
};

export default repository;
