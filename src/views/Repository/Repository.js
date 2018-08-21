import React from 'react';
import PropTypes from 'prop-types';

const Repository = ({ match }) => (
  <h1>{match.params.reponame}</h1>
);

Repository.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      reponame: PropTypes.string,
    }),
  }),
};

Repository.defaultProps = {
  match: {},
};

export default Repository;
