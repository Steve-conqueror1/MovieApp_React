import React, { Component } from 'react';
import {
  Modal,
  Button,
  Image,
  Thumbnail,
  Grid,
  Col,
  Row
} from 'react-bootstrap';
import axios from 'axios';

class Movies extends Component {
  constructor() {
    super();
    this.clickedMovie = 0;
    this.setId = 0;
    this.clickeMovieReviewId = 0;
    this.reviewAuthor = '';
    this.reviewDate = '';
    this.reviewText = '';

    this.state = {
      movies: [
        // {
        //   id: 1,
        //   title: 'Pradator',
        //   format: 'Movie',
        //   genre: 'Action',
        //   year: 2009,
        //   rating: 9.7
        // },
        // {
        //   id: 2,
        //   title: 'Pradator1',
        //   format: 'Movie',
        //   genre: 'Horror',
        //   year: 1989,
        //   rating: 7.6
        // },
        // {
        //   id: 3,
        //   title: 'Pradator2',
        //   format: 'Movie',
        //   genre: 'Comedy',
        //   year: 1999,
        //   rating: 8.7
        // }
      ],
      reviews: [],
      showMovieInfo: false,
      setId: 0
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8991/movieapp/movies', {
        headers: { crossDomain: true, 'Content-Type': 'application/json' }
      })
      .then(res => this.setState({ movies: res.data }));

    axios
      .get('http://localhost:8991/movieapp/review/view', {
        headers: { crossDomain: true, 'Content-Type': 'application/json' }
      })
      .then(res => this.setState({ reviews: res.data }));
  }

  handleHide = e => {
    this.setState({ showMovieInfo: false });
  };

  render() {
    const { movies, showMovieInfo, reviews } = this.state;

    return (
      <tbody>
        {movies.map(movie => (
          <tr
            onClick={() => {
              this.setState({ showMovieInfo: true });
              this.clickedMovie = movie.id;
              this.setId = movie.id;
            }}
            style={{ cursor: 'pointer' }}
          >
            <td>
              <img src={require('./img/movie-icon.jpg')} />
            </td>
            <td>{movie.name}</td>
            <td>{movie.imbd}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.releaseYear}</td>
            <td>{movie.rating}</td>
          </tr>
        ))}
        {showMovieInfo ? (
          <Modal
            show={showMovieInfo}
            onHide={this.handleHide}
            container={this}
            aria-labelledby="contained-modal-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-md">
                <h1>
                  Title:
                  {movies.map(movie => {
                    return movie.id === this.setId ? movie.name : null;
                  })}
                </h1>
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <img src={require('./img/movie2.jpg')} thumbnail />
              <p className="movieDescription">
                {movies.map(movie => {
                  return movie.id === this.setId ? movie.description : null;
                })}
              </p>
            </Modal.Body>
            <hr />

            <Modal.Body>
              <span className="textInfo">Format</span>:{' '}
              {movies.map(movie => {
                return movie.id === this.setId ? movie.imbd : null;
              })}
              <br />
              <span className="textInfo">Genre</span>:{' '}
              {movies.map(movie => {
                return movie.id === this.setId ? movie.genre.name : null;
              })}
              <br />
              <span className="textInfo">Release Year</span>:{' '}
              {movies.map(movie => {
                return movie.id === this.setId ? movie.releaseYear : null;
              })}
              <br />
              <span className="textInfo">Rating</span>:{' '}
              {movies.map(movie => {
                return movie.id === this.setId ? movie.rating : null;
              })}
            </Modal.Body>
            <hr />

            <Modal.Body>
              <h1 className="textInfo">User Reviews</h1>{' '}
              {movies.map(movie => {
                if (movie.id === this.setId) {
                  let movieReviews = movie.reviews;
                  if (movieReviews.length === 0) {
                    return <p>this movie does not have review yes</p>;
                  }
                  movieReviews.map(review => {
                    this.reviewAuthor = review.reviewAuthor;
                    this.reviewDate = review.reviewDate;
                    this.reviewText = review.reviewText;

                    // return (
                    //   <div>
                    //   <h3>
                    //   {this.reviewAuthor} --<span>{this.reviewDate}</span>{' '}
                    // </h3>
                    // <i> {this.reviewText}</i>
                    // </div>
                    // );
                  });
                }
              })}
              
              <hr/>
              <h3>
                {this.reviewAuthor} -- <span>{this.reviewDate}</span>{' '}
              </h3>
              <i> {this.reviewText}</i>
            </Modal.Body>
            <Modal.Footer>
              <Button
                bsStyle="warning"
                onClick={() => {
                  this.setState({ showMovieInfo: false });
                }}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        ) : null}
      </tbody>
    );
  }
}

export default Movies;
