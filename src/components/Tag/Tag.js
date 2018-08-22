import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTag = styled.span`
  background: #d4d2d2;
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 12px;
`;

const Tag = ({ children }) => (
  <StyledTag>
    { children }
  </StyledTag>
);

Tag.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Tag };
export default Tag;
