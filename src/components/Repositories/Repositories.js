import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card } from 'components/Card/Card';

const StyledRepository = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Header = styled.div`
  flex: 100%;
`;

const Repositories = ({ repositories }) => {
  console.log(repositories);
  return (
    <StyledRepository>
      {repositories.map(repository => (
        <Card>
          <Header>
            <h3>{ repository.name }</h3>
          </Header>
        </Card>
      ))}
    </StyledRepository>
  );
};

Repositories.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { Repositories };
export default Repositories;
