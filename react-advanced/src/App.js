// import logo from "./logo.svg";
import "./App.css";
// import Movie from "./hoc/Movie";
// import Counter from "./hooks/Counter";
// import Users from "./hooks/Users";
import React, { Component } from "react";
import MoviePage from "./context/MoviePage";
import { UserContext } from "./context/userContext";

class App extends Component {
  state = { currentUser: { name: "daniyal" } };
  render() {
    return (
      <div className="App">
        <UserContext.Provider value={this.state.currentUser}>
          <MoviePage />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
