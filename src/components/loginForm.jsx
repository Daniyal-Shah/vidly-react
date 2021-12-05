import React from "react";
import Joi from "joi-browser";
import Input from "./common/input";
import { forEach } from "lodash";

class LoginForm extends React.Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.errors, this.schema, options);

    if (!error) return null;

    const errors = {};

    error.details.forEach((item, index) => {
      errors[item.path[0]] = item.message;
    });
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;
    console.log("form submitted");
  };

  validateProperty = (input) => {};

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.setState({ account, errors });
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div className="container">
        <h1 className="mb-2">Login</h1>
        <form className="" onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />

          <div className="form-group mb-2">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
