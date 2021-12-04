import React from "react";

class LoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();

    console.log("form submitted");
  };
  render() {
    return (
      <div className="container">
        <h1 className="mb-2">Login</h1>
        <form className="" onSubmit={this.handleSubmit}>
          <div className="form-group mb-2">
            <label htmlFor="usernameField">Username</label>
            <input type="text" id="usernameField" className="form-control" />
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
