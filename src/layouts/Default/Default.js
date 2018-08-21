import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Header,
  Sidebar,
} from './components';

const StyledDefault = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Section = styled.section`
  flex: 80%;
`;

const Default = ({ children }) => (
  <StyledDefault>
    <Header />
    <Sidebar />
    <Section>
      { children }
    </Section>
  </StyledDefault>
);

Default.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Default;
