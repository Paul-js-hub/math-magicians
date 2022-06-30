import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './calculator.css';

const Calculator = () => {
  const [state, setState] = useState(0);
  // eslint-disable-next-line
  const [calculatorBtns, setArray] = useState(['AC', '+/-', '%', 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.']);

  const handleClick = (e) => {
    const value = e.target.textContent;
    setState((state) => calculate(state, value));
  };

  const result = `${state.total || state.operation || state.next ? `${state.total || ''} ${state.operation || ''} ${state.next || ''}` : 0}`;
  return (
    <div className="container">
      <div className="input">{result}</div>
      <div className="array-btn flex">
        {calculatorBtns.map((btn) => <button type="button" key={btn} onClick={handleClick} className="btn-array">{btn}</button>)}
      </div>
      <div className="operations subgrid">
        <button type="button" onClick={handleClick} className="opers">÷</button>
        <button type="button" onClick={handleClick} className="opers">x</button>
        <button type="button" onClick={handleClick} className="opers">-</button>
        <button type="button" onClick={handleClick} className="opers">+</button>
        <button type="button" onClick={handleClick} className="opers">=</button>
      </div>
    </div>
  );
};

export default Calculator;
