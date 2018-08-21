import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchRepositories } from 'actions/repositoryActions';
import { Repositories } from 'components';
import * as utils from 'utils/string';

const StyledTag = styled.div`
  padding: 0 10px;
`;

const TagHeader = styled.div`
  border-bottom: 1px solid #887b7b;
  box-shadow: 0 1px #00000033;

  & i {
    color: #df6564;
  }

  & h1 {
    display: inline-block;
    margin-left: 5px;
  }
`;

class Tag extends PureComponent {
  static propTypes = {
    fetchRepositories: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        tag: PropTypes.string.isRequired,
      }),
    }).isRequired,
    repositories: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    repositories: [],
  };

  componentDidMount() {
    this.fetchRepositories();
  }

  componentDidUpdate(prevProps) {
    const { match: { params } } = this.props;
    if (prevProps.match.params.tag !== params.tag) {
      this.fetchRepositories();
    }
  }

  fetchRepositories() {
    const { fetchRepositories, match: { params } } = this.props;

    fetchRepositories(params.tag);
  }

  render() {
    const { match: { params }, repositories } = this.props;
    return (
      <StyledTag>
        <TagHeader>
          <i className="fas fa-tags" />
          <h1>{utils.capitalize(params.tag)}</h1>
        </TagHeader>

        <Repositories repositories={repositories} />
      </StyledTag>
    );
  }
}

const mapStateToProps = state => ({
  repositories: state.repository.repositories,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchRepositories,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Tag);
