import React, { Component } from "react";
import withToolTip from "./withTooltip";

class Movie extends Component {
  render() {
    return (
      <div>
        Movie
        {this.props.showTooltip && <h1>Tooltip</h1>}
      </div>
    );
  }
}

export default withToolTip(Movie);
