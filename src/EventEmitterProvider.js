import { Component } from "react";
import PropTypes from "prop-types";

export default class EventEmitterProvider extends Component {
  static propTypes = {
    events: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  };

  static defaultProps = {
    events: false,
  };

  static childContextTypes = {
    events: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  };

  getChildContext() {
    return {
      events: this.props.events,
    };
  }

  render() {
    return this.props.children;
  }
}
