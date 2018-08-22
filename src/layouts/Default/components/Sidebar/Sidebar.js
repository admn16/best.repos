import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { popular as popularTags } from 'constants/tags';

const StyledSidebar = styled.nav`
  background: #fff;
  flex: 15%;
  height: 100%;
  box-shadow: 0 0 200px -20px rgba(57,55,73,.4);
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

const ListText = styled.span`
  display: inline-block;
  color: #74708d;
  padding: 10px;
`;

const ListItem = styled.li`
  font-size: 14px;
  text-align: left;
`;

const NestedList = styled(List)`
  padding-left: 10px;
`;

const StyledLink = styled(Link)`
  color: #74708d;
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  width: 100%;
  &:visited {
    color: #74708d;
  }
  &:hover {
    cursor: pointer;
    color: #e6756c;
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
          HOME
        </StyledLink>
      </ListItem>

      <ListItem>
        <ListText>
          POPULAR TAGS
        </ListText>
        <NestedList>
          {popularTagsObj.map(tag => (
            <ListItem key={tag.value}>
              <StyledLink to={`/tag/${tag.value}`}>
                { tag.text }
              </StyledLink>
            </ListItem>
          ))}
        </NestedList>
      </ListItem>
    </List>
  </StyledSidebar>
);

export { Sidebar };
export default Sidebar;
