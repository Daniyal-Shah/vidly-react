import React from "react";
import Input from "./common/input";

class LoginForm extends React.Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  validate = () => {
    const errors = {};
    const { account } = this.state;

    if (account.username.trim() === "") {
      errors.username = "Username is required";
    }
    if (account.password.trim() === "") {
      errors.password = "Password is required";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors });

    if (errors) return;
    console.log("form submitted");
  };
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
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
            label="username"
            onChange={this.handleChange}
            error={errors}
          />
          <Input
            name="password"
            value={account.password}
            label="password"
            onChange={this.handleChange}
            error={errors}
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
