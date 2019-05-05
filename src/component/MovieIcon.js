import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';

const MovieIcon = ({ poster_path }) => (
  <Image
    src={
      poster_path
        ? `${process.env.REACT_APP_MOVIE_IMAGE}/${poster_path}`
        : `http://via.placeholder.com/32x52`
    }
    size="mini"
  />
);

MovieIcon.propTypes = {
  poster_path: PropTypes.string.isRequired,
};

export default MovieIcon;
