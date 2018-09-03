import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactMD from 'react-markdown';
import { Card } from 'components/Card/Card';

class RepoDetails extends PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      html_url: PropTypes.string,
    }).isRequired,
  };

  render() {
    const { data } = this.props;
    const {
      description,
      forks_count: forks,
      full_name: name,
      html_url: url,
      language,
      topics,
    } = data;

    console.log(data);

    return (
      <article>
        <Card>
          <div>
            <h4>
              <i className="fas fa-book-open" />
              &nbsp;
              Overview
            </h4>
          </div>
          <ReactMD source={description} linkTarget="_blank" />
          { name }
          { url }
        </Card>
      </article>
    );
  }
}

export { RepoDetails };
export default RepoDetails;
