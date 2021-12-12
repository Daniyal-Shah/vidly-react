import React from "react";

function withToolTip(Component) {
  return class WithTooltip extends React.Component {
    state = {
      showTooltip: false,
    };

    mouseOver = () => {
      this.setState({ showTooltip: true });
    };
    mouseLeave = () => {
      this.setState({ showTooltip: false });
    };

    render() {
      return (
        <div onMouseOver={this.mouseOver} onMouseLeave={this.mouseLeave}>
          <Component {...this.props} showTooltip={this.state.showTooltip} />
        </div>
      );
    }
  };
}

export default withToolTip;
