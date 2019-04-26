import React, { Component } from "react";
import PropTypes from "prop-types";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default function eventEmitterConnect(WrappedComponent) {
  return class extends Component {
    static displayName = `eventEmitterConnect(${getDisplayName(
      WrappedComponent
    )})`;

    static contextTypes = {
      events: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
    };

    render() {
      return <WrappedComponent {...this.props} events={this.context.events} />;
    }
  };
}
