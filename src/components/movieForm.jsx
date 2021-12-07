import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: getGenres(),
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
      console.log("Movie not found");
      // Navigate("/not-found");
    }

    this.setState({ data: this.mapToViewModel(movie) });
  };

  componentDidMount() {
    // this.populateGenres();
    this.populateMovie(this.props.paramId);
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

  doSubmit = () => {
    console.log("added");
    saveMovie(this.state.data);
    // Navigate("/movies");
  };

  render() {
    return (
      <div className="container">
        <div className="row d-flex justify-content-center ">
          <div className="col col-sm-12 col-md-8 col-lg-5">
            <h2 className="mb-5">Movie Form</h2>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("title", "Title")}
              {this.renderSelect("genreId", "Genre", this.state.genres)}
              {this.renderInput("numberInStock", "Number in Stock", "number")}
              {this.renderInput("dailyRentalRate", "Rate")}
              {this.renderButton("Save")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieForm;
