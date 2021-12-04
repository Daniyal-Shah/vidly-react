import React from "react";
import Input from "./common/input";

class LoginForm extends React.Component {
  state = {
    account: { username: "", password: "" },
  };
  username = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  render() {
    const { account } = this.state;
    return (
      <div className="container">
        <h1 className="mb-2">Login</h1>
        <form className="" onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="username"
            onChange={this.handleChange}
          />
          <Input
            name="password"
            value={account.password}
            label="password"
            onChange={this.handleChange}
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
