import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Movie from './components/Movie';
import Header from './components/Header';
import Filter from './components/Filter';
import Footer from './components/Footer';
// import { Button } from 'react-bootstrap';
// import Movies from './components/Movies';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Movie App" />
        <div className="container">
          <Filter />
          <Movie />
          {/* <Movie title="Predator" genre="Romance" releaseYear={2013} /> */}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
