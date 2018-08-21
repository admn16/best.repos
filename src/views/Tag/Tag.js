import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchRepositories } from 'actions/repositoryActions';

class Tag extends PureComponent {
  static propTypes = {
    fetchRepositories: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        tag: PropTypes.string.isRequired,
      }),
    }).isRequired,
  };

  componentDidMount() {
    const { fetchRepositories } = this.props;

    console.log(fetchRepositories());
  }

  render() {
    const { match: { params } } = this.props;
    return (
      <div>
        { params.tag }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchRepositories,
}, dispatch);

export default connect(null, mapDispatchToProps)(Tag);
