import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './calculator.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleClick } = this.props;
    return (
      <div>
        <button type="button" onClick={handleClick}>X</button>
      </div>
    );
  }
}

export default Button;

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
