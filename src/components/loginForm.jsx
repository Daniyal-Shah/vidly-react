import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    //Server calling
    console.log("form submitted");
  };

  render() {
    return (
      <div className="container">
        <h1 className="mb-2">Login</h1>
        <form className="" onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          <div className="form-group mb-2">{this.renderButton("Login")}</div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
