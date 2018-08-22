import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchRepository } from 'actions/repositoryActions';

class Repo extends PureComponent {
  static propTypes = {
    fetchRepository: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        author: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    }),
  };

  static defaultProps = {
    match: {},
  };

  componentDidMount() {
    const { fetchRepository, match: { params } } = this.props;

    fetchRepository(params);
  }

  render() {
    const { match } = this.props;

    return (
      <h1>{match.params.name}</h1>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchRepository,
}, dispatch);

export default connect(null, mapDispatchToProps)(Repo);
