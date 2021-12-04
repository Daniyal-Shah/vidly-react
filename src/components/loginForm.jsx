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
  handleChange = (e) => {
    const account = { ...this.state.account };
    account.username = e.currentTarget.value;
    this.setState({ account });
  };
  render() {
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
              ref={this.username}
              value={this.state.account.username}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="passwordField">Password</label>
            <input type="text" id="passwordField" className="form-control" />
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
