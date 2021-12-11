import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import * as userService from "../services/userService";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import auth from "../services/authService";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      auth.loginWithJwt(response.headers["x-auth-token"]);

      toast.success("User added sucessfuly!");
      window.location = "/";
    } catch (error) {
      const errors = { ...this.state.errors };
      errors.username = error.response.data;
      this.setState({ errors });
      toast.error("Something went wrong");
    }
    console.log("registration done");
  };
  render() {
    return (
      <div className="container">
        <div className="row d-flex justify-content-center ">
          <div className="col col-sm-12 col-md-8 col-lg-5">
            <form onSubmit={this.handleSubmit}>
              <h2 className="mb-5">Register</h2>
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              {this.renderInput("name", "Name")}
              {this.renderButton("Register")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
