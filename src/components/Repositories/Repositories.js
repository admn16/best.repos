import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from 'components/Card/Card';
import { Tag } from 'components/Tag/Tag';
import { toTitle } from 'utils/string';
import { toShortcutString } from 'utils/number';

const StyledRepository = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledCard = styled(Card)`
  flex: 45%;
`;

const CardHeader = styled(Link)`
  color: #444158;
  display: flex;
  flex: 100%;
  align-items: center;
  justify-content: space-around;
  text-decoration: none;
  &:visited {
    color: #444158;
  }
  &:hover {
    color: #d46362;
  }
`;

const CardName = styled.h3`
  display: inline-block;
`;

const CardImage = styled.img`
  display: inline-block;
  width: 40px;
`;

const CardRowSeparator = styled.div`
  border-bottom: 1px solid #27232333;
  margin: 10px 0;
  width: 100%;
`;

const Star = styled.i`
  color: #ffc107;
`;


const Repositories = ({ repositories }) => (
  <StyledRepository>
    {repositories.map((repository) => {
      const {
        name,
        owner,
        stargazers_count: starCount,
      } = repository;
      return (
        <StyledCard key={repository.id}>
          <CardHeader to={`/repo/${repository.full_name}`}>
            <CardImage src={owner.avatar_url} alt={owner.login} />
            <CardName>
              { toTitle(name) }
            </CardName>
            <span>
              <Star className="fas fa-star" />&nbsp;
              { toShortcutString(starCount) }
            </span>
          </CardHeader>

          <CardRowSeparator />

          <div>
            <p>
              { repository.description }
            </p>
            {
              repository.language && (
                <Tag>{ repository.language }</Tag>
              )
            }
          </div>
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
