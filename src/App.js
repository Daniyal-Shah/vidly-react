import "./App.css";
import Movies from "./components/movies";
import { Routes, Route, Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

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

// class App extends React.Component {
//   render() {
//     return (
//       <div className="container">
//         <div className="row mb-4 ">
//           <ToastContainer />

//           <NavBar />
//         </div>
//         <Routes>
//           <Route path="/" element={<Navigate replace to="/movies" />} />
//           <Route path="/movies" element={<Movies />} />
//           <Route path="/movies/:id" element={<MoviesForm />} />
//           <Route path="/customers" element={<Customers />} />
//           <Route path="/rentals" element={<Rentals />} />
//           <Route path="/login" element={<LoginForm />} />
//           <Route path="/register" element={<RegisterForm />} />
//           <Route path="/not-found" element={<NotFound />} />
//           <Route path="*" element={<Navigate replace to="/not-found" />} />
//         </Routes>
//       </div>
//     );
//   }
// }

// export default App;

function App() {
  // const state = {};

  return (
    <div className="container">
      <div className="row mb-4 ">
        <ToastContainer />

        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Navigate replace to="/movies" />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviesForm />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/not-found" />} />
      </Routes>
    </div>
  );
}

export default App;
