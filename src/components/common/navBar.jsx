import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = (params) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              "nav-item nav-link" + (isActive ? " active" : "")
            }
          >
            Movies
          </NavLink>
          <NavLink
            to="/customers"
            className={({ isActive }) =>
              "nav-item nav-link" + (isActive ? " active" : "")
            }
          >
            Customers
          </NavLink>
          <NavLink
            to="/rentals"
            className={({ isActive }) =>
              "nav-item nav-link" + (isActive ? " active" : "")
            }
          >
            Rentals
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              "nav-item nav-link" + (isActive ? " active" : "")
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              "nav-item nav-link" + (isActive ? " active" : "")
            }
          >
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
