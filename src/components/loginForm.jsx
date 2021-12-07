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
