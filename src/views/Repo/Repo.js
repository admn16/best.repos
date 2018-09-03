import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchRepository } from 'actions/repositoryActions';
import { RepoDetails } from 'components';
import { capitalize } from 'utils/string';
import { commaSeparated } from 'utils/number';

const StyledRepo = styled.article`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  flex: 100%;
  justify-content: space-between;
`;

const HeaderTitle = styled.h1`
  color: #e77b6e;
  font-size: 36px;
  margin: 0;
  padding: 0;
`;

const Star = styled.i`
  color: #ffc107;
`;

class Repo extends PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      full_name: PropTypes.string,
    }),
    fetchRepository: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        author: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    }),
  };

  static defaultProps = {
    data: {},
    match: {},
  };

  componentDidMount() {
    const { fetchRepository, match: { params } } = this.props;

    fetchRepository(params);
  }

  render() {
    const { data, match: { params } } = this.props;
    const title = capitalize(params.name);

    return (
      <StyledRepo>
        <Header>
          <HeaderTitle>{title}</HeaderTitle>

          {
            typeof data.stargazers_count !== 'undefined' && (
            <span>
              <Star className="fas fa-star" />&nbsp;
              {commaSeparated(data.stargazers_count)}
            </span>
            )
          }

        </Header>

        <RepoDetails data={data} />
      </StyledRepo>
    );
  }
}

const mapStateToProps = state => ({
  data: state.repository.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchRepository,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Repo);
