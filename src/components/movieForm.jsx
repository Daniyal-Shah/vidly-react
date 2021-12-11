import React from "react";
import Joi, { errors } from "joi-browser";
import Form from "./common/form";
import { getMovie, saveMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";
import { toast } from "react-toastify";

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

  populateGenres = async () => {
    const { data: genres } = await getGenres();
    this.setState({ genres });
  };

  populateMovie = async (paramId) => {
    const movieId = paramId;
    if (movieId === "new") return;

    try {
      console.log("movie id");
      console.log(movieId);
      const { data: movie } = await getMovie(movieId);
      console.log(movie);
      this.setState({ data: this.mapToViewModel(movie) });
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error("Movie is not found");
      }
    }
  };

  async componentDidMount() {
    await this.populateGenres();
    await this.populateMovie(this.props.paramId);
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

  doSubmit = async () => {
    console.log("added");

    try {
      await saveMovie(this.state.data);
      toast.success("Movie added sucessfuly!");
    } catch (error) {
      toast.error("Something went wrong");
    }

    // this.props.navigatePage("/movies");
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
