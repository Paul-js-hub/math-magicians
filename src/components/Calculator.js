import React, { Component } from 'react';
import './calculator.css';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: ['AC', '+/-', '%', 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'],
    };
  }

  render() {
    const { array } = this.state;
    return (
      <div className="container">
        <div className="input">0</div>
        <div className="array-btn flex">
          {array.map((arr) => <button type="button" key={arr}>{arr}</button>)}
        </div>
        <div className="operations subgrid">
          <button type="button">/</button>
          <button type="button">*</button>
          <button type="button">-</button>
          <button type="button">+</button>
          <button type="button">=</button>
        </div>
      </div>
    );
  }
}
