// import logo from "./logo.svg";
import "./App.css";
// import Movie from "./hoc/Movie";
// import Counter from "./hooks/Counter";
// import Users from "./hooks/Users";
import React, { Component } from "react";
import MoviePage from "./context/MoviePage";
import { UserContext } from "./context/userContext";

class App extends Component {
  state = { currentUser: { name: "" } };

  handleLoggedIn = (username) => {
    console.log("Getting the user", username);
    const user = { name: username };
    this.setState({ currentUser: user });
  };

  render() {
    return (
      <div className="App">
        <UserContext.Provider
          value={{
            currentUser: this.state.currentUser,
            onLoggedIn: this.handleLoggedIn,
          }}
        >
          <MoviePage />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
