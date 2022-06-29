import React, { Component } from 'react';
// import Button from './Button';
import calculate from '../logic/calculate';
import './calculator.css';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: ['AC', '+/-', '%', 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'],
      total: 0,
      next: '',
      operation: '',
    };
  }

  handleClick = (obj) => {
    const value = obj.target.textContent;
    this.setState((e) => calculate(e, value));
  }

  render() {
    const {
      array, total, next, operation,
    } = this.state;
    const result = `${total || operation || next ? `${total || ''} ${operation || ''} ${next || ''}` : 0}`;
    return (
      <div className="container">
        <div className="input">{result}</div>
        <div className="array-btn flex">
          {array.map((arr) => <button type="button" key={arr} onClick={this.handleClick} className="btn-array">{arr}</button>)}
        </div>
        <div className="operations subgrid">
          <button type="button" onClick={this.handleClick} className="opers">÷</button>
          <button type="button" onClick={this.handleClick} className="opers">x</button>
          <button type="button" onClick={this.handleClick} className="opers">-</button>
          <button type="button" onClick={this.handleClick} className="opers">+</button>
          <button type="button" onClick={this.handleClick} className="opers">=</button>
        </div>
      </div>
    );
  }
}
