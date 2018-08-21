import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Tag extends PureComponent {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        tag: PropTypes.string.isRequired,
      }),
    }).isRequired,
  };

  componentDidMount() {
  }

  render() {
    const { match: { params } } = this.props;
    return (
      <div>
        { params.tag }
      </div>
    );
  }
}

export default Tag;
