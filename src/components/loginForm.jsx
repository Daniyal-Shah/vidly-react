import React from "react";

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
          <div className="form-group mb-2">
            <label htmlFor="usernameField">Username</label>
            <input
              autoFocus
              type="text"
              id="usernameField"
              name="username"
              ref={this.username}
              value={account.username}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="passwordField">Password</label>
            <input
              type="text"
              name="password"
              id="passwordField"
              value={account.password}
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group mb-2">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
