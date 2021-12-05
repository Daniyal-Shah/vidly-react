import React from "react";
import Joi from "joi-browser";
import Input from "./common/input";
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
    const { data, errors } = this.state;
    return (
      <div className="container">
        <h1 className="mb-2">Login</h1>
        <form className="" onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={data.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={data.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />

          <div className="form-group mb-2">
            <button disabled={this.validate()} className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
