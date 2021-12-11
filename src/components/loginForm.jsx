import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { login } from "./../services/authService";
import { toast } from "react-toastify";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    //Server calling
    const { data } = this.state;

    try {
      await login(data.username, data.password);
      toast.success("User added sucessfuly!");
      console.log("login done");
    } catch (error) {
      const errors = { ...this.state.errors };
      errors.username = error.response.data;
      this.setState({ errors });
      toast.error("Something went wrong");
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row d-flex justify-content-center ">
          <div className="col col-sm-12 col-md-8 col-lg-5">
            <h2 className="mb-5">Login</h2>
            <form className="my-2" onSubmit={this.handleSubmit}>
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              <div className="form-group ">{this.renderButton("Login")}</div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
