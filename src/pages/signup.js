import React from 'react';
import { Grid } from 'semantic-ui-react';
import SegmentLoader from '../component/SegmentLoader';
import SignupContainer from '../container/Signup';

class Signup extends React.Component {
  render() {
    return (
      <Grid padded centered>
        <Grid.Row>
          <Grid.Column width={8}>
            <SegmentLoader>
              <SignupContainer />
            </SegmentLoader>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
} // Signup

export default Signup;
