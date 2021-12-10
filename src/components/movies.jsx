import React, { Component } from "react";
import { paginate } from "../../src/utils/paginate";
import { getMovies, deleteMovie } from "../services/movieService";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/genreService";
import MoviesTable from "./moviesTable";
import _ from "lodash";
import { NavLink } from "react-router-dom";
import SearchBox from "./searchBox";
import { toast } from "react-toastify";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    genres: [],
    currentPage: 1,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" },
  };

  async componentDidMount() {
    const allGenre = { _id: "", name: "All genres" };
    this.setState({ selectedGenre: allGenre });

    const { data } = await getGenres();
    const genres = [allGenre, ...data];

    const { data: movies } = await getMovies();

    console.log("movies in componentDidMount");
    console.log(movies);

    this.setState({ movies, genres });
  }

  handleDelete = async (movie) => {
    const originalMovies = this.state.movies;

    const movies = originalMovies.filter((m) => m._id !== movie._id);
    this.setState({ movies });

    try {
      await deleteMovie(movie._id);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error("Alert!  Movie is already deleted");
        this.setState({ movies: originalMovies });
      }
    }
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
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      searchQuery,
      selectedGenre,
      sortColumn,
    } = this.state;

    let filtered = allMovies;
    if (searchQuery) {
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (selectedGenre && selectedGenre._id) {
      filtered = allMovies.filter((m) => m.genre._id === selectedGenre._id);
    }
    // selectedGenre && selectedGenre._id
    //   ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
    //   : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, movies };
  };

  render() {
    const { length: count } = this.state.movies;
    const { genres: allGenres, sortColumn, searchQuery } = this.state;
    const { totalCount, movies } = this.getPagedData();

    if (count === 0) return <p>There are no movies in the database</p>;
    else
      return (
        <div className="container-fluid py-5 pt-0">
          <div className="row">
            <div className="col-3 p-3 ms-3">
              <ListGroup
                items={allGenres}
                selectedItem={this.state.selectedGenre}
                onItemSelect={this.handleGenreSelect}
              />
            </div>
            <div className="col ">
              <div className="row">
                <NavLink
                  to="/movies/new"
                  className="btn btn-outline-primary  mb-2"
                >
                  Add new movie
                </NavLink>
              </div>

              <p>Showing {totalCount} movies in the database.</p>
              <SearchBox value={searchQuery} onChange={this.handleSearch} />
              <MoviesTable
                movies={movies}
                onLike={this.handleLike}
                sortColumn={sortColumn}
                onDelete={this.handleDelete}
                onSort={this.handleSort}
              />

              <Pagination
                itemsCount={totalCount}
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
