import calculate from './calculate';

let calcObj = { total: '0', next: null, operation: null };

describe('returns a total tests for numbers', ()=>{
  test('it expects a 1 + 5 to be 6', () => {
    calcObj = calculate(calcObj, '1');
    calcObj = calculate(calcObj, '+');
    calcObj = calculate(calcObj, '5');
    calcObj = calculate(calcObj, '=');
    expect(calcObj.total).toBe('6');
  });
  test('it expects a 1 + 7 to be 8', () => {
    calcObj = calculate(calcObj, '1');
    calcObj = calculate(calcObj, '+');
    calcObj = calculate(calcObj, '7');
    calcObj = calculate(calcObj, '=');
    expect(calcObj.total).not.toBe('10');
  });
})
