import React from 'react';
import { Grid } from 'semantic-ui-react';
import SegmentLoader from '../component/SegmentLoader';
import SigninContainer from '../container/Signin';

class Signin extends React.Component {
  render() {
    return (
      <Grid padded centered>
        <Grid.Row>
          <Grid.Column width={8}>
            <SegmentLoader>
              <SigninContainer />
            </SegmentLoader>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
} // Signin

export default Signin;
