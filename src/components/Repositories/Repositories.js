import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card } from 'components/Card/Card';
import { toTitle } from 'utils/string';

const StyledRepository = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledCard = styled(Card)`
  flex: 45%;
`;

const CardHeader = styled.div`
  display: flex;
  flex: 100%;
  align-items: center;
  justify-content: space-around;
`;

const CardName = styled.h3`
  display: inline-block;
`;

const CardImage = styled.img`
  display: inline-block;
  width: 40px;
`;

const Star = styled.i`
  color: yellow;
`;

const Repositories = ({ repositories }) => (
  <StyledRepository>
    {repositories.map((repository) => {
      const {
        name,
        owner,
        stargazers_count: starCount,
      } = repository;
      console.log(repository);
      return (
        <StyledCard key={repository.id}>
          <CardHeader>
            <CardImage src={owner.avatar_url} alt={owner.login} />
            <CardName>
              { toTitle(name) }
            </CardName>

            <span>
              <Star className="fas fa-star" />
              { starCount }
            </span>
          </CardHeader>
        </StyledCard>
      );
    })}
  </StyledRepository>
);

Repositories.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { Repositories };
export default Repositories;
