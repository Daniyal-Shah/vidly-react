import React, { Component, Fragment } from "react";
import MovieRow from "./MovieRow";
import { UserContext } from "./userContext";

class MovieList extends Component {
  static contextType = UserContext;

  componentDidMount() {
    console.log(this.context);
  }
  render() {
    return (
      <Fragment>
        <UserContext.Consumer>
          {(userContext) => (
            <div>
              MovieList {userContext.currentUser.name} <MovieRow />{" "}
            </div>
          )}
        </UserContext.Consumer>
      </Fragment>
    );
  }
}

export default MovieList;
