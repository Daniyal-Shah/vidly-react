import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";
import { NavLink } from "react-router-dom";
import authService from "../services/authService";

class MoviesTable extends Component {
  constructor() {
    super();
    const user = authService.getCurrentUser();
    if (user && user.isAdmin) {
      this.columns.push(this.deleteColumn);
    }
  }

  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <NavLink to={`/movies/${movie._id}`} style={{ textDecoration: "none" }}>
          {movie.title}
        </NavLink>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
  ];

  deleteColumn = {
    key: "delete",
    content: (movie) => (
      <button
        className="btn btn-danger btn-sm"
        onClick={() => this.props.onDelete(movie)}
      >
        Delete
      </button>
    ),
  };

  render() {
    const { movies, sortColumn, onSort } = this.props;
    return (
      <Table
        columns={this.columns}
        onSort={onSort}
        data={movies}
        sortColumn={sortColumn}
      />
    );
  }
}

export default MoviesTable;
