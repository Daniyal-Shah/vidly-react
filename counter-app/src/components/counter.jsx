import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
  }
  render() {
    let classes = "badge pill-rounded mx-2  bg-";
    classes += this.props.counter.value == 0 ? "warning" : "primary";

    return (
      <div className="container">
        <div className="row">
          <div className="col-1  d-flex justify-content-center align-items-center">
            <span className={classes}>{this.formatCount()}</span>
          </div>

          <div className="col">
            {/* Increment Button */}
            <button
              className="btn btn-secondary btn-sm m-2 text-center"
              onClick={() => this.props.onIncrement(this.props.counter)}
            >
              +
            </button>
            {/* Decrement Button */}
            <button
              className="btn btn-secondary btn-sm me-2 "
              onClick={() => this.props.onDecrement(this.props.counter)}
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
            >
              -
            </button>
            <button
              className="btn btn-danger btn-sm m-2"
              onClick={() => this.props.onDelete(this.props.counter.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }

  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
}

export default Counter;
