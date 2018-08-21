import React from 'react';
import PropTypes from 'prop-types';
import { Header } from './components';

const Default = ({ children }) => (
  <div>
    <Header />
    <section>
      { children }
    </section>
  </div>
);

Default.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Default;
