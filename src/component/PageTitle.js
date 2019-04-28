import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Header } from 'semantic-ui-react';

const PageTitle = props => (
  <Grid.Row>
    <Grid.Column>
      <Header as="h1">{props.title}</Header>
    </Grid.Column>
  </Grid.Row>
);

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
