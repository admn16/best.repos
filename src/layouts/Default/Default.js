import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Header,
  Sidebar,
} from './components';

const StyledDefault = styled.div`
  align-content: baseline;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  overflow: auto;
  width: 100%;
`;

const Section = styled.section`
  flex: 85%;
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
