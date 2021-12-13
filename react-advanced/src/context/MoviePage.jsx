import React, { Component } from "react";
import MovieList from "./MovieList";
import Login from "./Login";

class MoviePage extends Component {
  render() {
    return (
      <div>
        <MovieList />
        <Login />
      </div>
    );
  }
}

export default MoviePage;
