import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { Navigate } from "react-router-dom";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate"),
  };

  populateGenres = () => {
    const { data: genres } = getGenres();
    this.setState({ genres });
  };

  populateMovie = (paramId) => {
    const movieId = paramId;
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    if (!movie) {
      Navigate("/not-found");
    }

    this.setState({ data: this.mapToViewModel(movie) });
  };

  componentDidMount() {
    // console.log(`before update state `);
    // console.log(this.state);

    this.populateGenres();

    console.log(`after update state `);
    console.log(this.state);

    // this.populateMovie(this.props.paramId);
    // console.log(` param in MovieForm ${this.props.paramId}`);
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  onSubmit = () => {
    console.log("added");
    saveMovie(this.state.data);
    Navigate("/movies");
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}></form>
        {this.renderInput("title", "Title")}
        {this.renderSelect("genreId", "Genre", this.state.genres)}
        {this.renderInput("numberInStock", "Number In Stock", "number")}
        {this.renderInput("dailyRentalRate", "Rate")}
        {this.renderButton("Save")}
      </div>
    );
  }
}

export default MovieForm;
