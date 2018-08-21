import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { popular as popularTags } from 'constants/tags';

const StyledSidebar = styled.nav`
  background: #EFEFEF;
  flex: 20%;
  margin: 4px 0;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

const ListItem = styled.li`
  text-align: center;
  &:hover {
    cursor: pointer;
    background: #C4C4C4;
  }
`;

const StyledLink = styled(Link)`
  color: #101010;
  display: inline-block;
  padding: 10px 0;
  text-decoration: none;
  width: 100%;
  &:visited {
    color: #101010;
  }
`;

const popularTagsObj = popularTags.map((tag) => {
  const capitalized = `${tag[0].toUpperCase()}${tag.slice(1)}`;
  return {
    value: tag,
    text: capitalized,
  };
});

const Sidebar = () => (
  <StyledSidebar>
    <List>
      <ListItem>
        <StyledLink to="/">
          Home
        </StyledLink>
      </ListItem>

      {popularTagsObj.map(tag => (
        <ListItem key={tag.value}>
          <StyledLink to={`/tag/${tag.value}`}>
            { tag.text }
          </StyledLink>
        </ListItem>
      ))}
    </List>
  </StyledSidebar>
);

export { Sidebar };
export default Sidebar;
