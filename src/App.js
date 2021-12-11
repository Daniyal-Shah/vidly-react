import "./App.css";
import Movies from "./components/movies";
import { Routes, Route, Navigate, Redirect } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NavBar from "./components/common/navBar";
import NotFound from "./components/notFound";
import MoviesForm from "./components/moviesForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import Logout from "./components/logout";
import auth from "./services/authService";

class App extends React.Component {
  state = {};
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  render() {
    const { user } = this.state;
    return (
      <div className="container">
        <div className="row mb-4 ">
          <ToastContainer />
          <NavBar user={user} />
        </div>
        <Routes>
          <Route path="/" element={<Navigate replace to="/movies" />} />
          <Route path="/movies" element={<Movies user={user} />} />
          <Route path="/movies/:id" element={<MoviesForm />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/not-found" />} />
        </Routes>
      </div>
    );
  }
}

export default App;
