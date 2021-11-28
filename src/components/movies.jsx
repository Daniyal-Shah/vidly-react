import React, { Component } from "react";
import { paginate } from "../../src/utils/paginate";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import { getGenres, genres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    genres: [],
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const allGenre = { _id: "", name: "All genres" };
    this.setState({ selectedGenre: allGenre });
    const genres = [allGenre, ...getGenres()];
    this.setState({ movies: getMovies(), genres });

    // console.log(this.state.genres);
    // console.log(this.state.movies);
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (path) => {
    const sortColumn = { ...this.state.sortColumn };

    // console.log("oursort : ", sortColumn);
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
      console.log(sortColumn);
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
      console.log(sortColumn);
    }

    this.setState({ sortColumn });
  };
  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      genres: allGenres,
      selectedGenre,
      sortColumn,
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.sortBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);

    if (count === 0) return <p>There are no movies in the database</p>;
    else
      return (
        <div className="container-fluid p-5">
          <div className="row">
            <div className="col-3 p-3 ms-3">
              <ListGroup
                items={allGenres}
                selectedItem={this.state.selectedGenre}
                onItemSelect={this.handleGenreSelect}
              />
            </div>
            <div className="col ">
              <p>Showing {filtered.length} movies in the database.</p>
              <MoviesTable
                movies={movies}
                onLike={this.handleLike}
                onDelete={this.handleDelete}
                onSort={this.handleSort}
              />
              <Pagination
                itemsCount={filtered.length}
                pageSize={this.state.pageSize}
                onPageChange={this.handlePageChange}
                currentPage={this.state.currentPage}
              />
            </div>
          </div>
        </div>
      );
  }
}
export default Movies;
