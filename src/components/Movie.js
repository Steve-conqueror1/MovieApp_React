import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import Movies from './Movies.js';

class Movie extends Component {
  render() {
    const { title, genre, releaseYear } = this.props;

    return (
      <div>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th />
              <th>Title</th>
              <th>Format</th>
              <th>Genre</th>
              <th>Year</th>
              <th>Rating</th>
            </tr>
          </thead>
          <Movies />
        </Table>
      </div>
    );
  }
}

Movie.propTypes = {
  // name: PropTypes.string.isRequired,
  // genre: PropTypes.string.isRequired,
  // releaseYear: PropTypes.number.isRequired
};

export default Movie;
