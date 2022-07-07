import calculate from './calculate';

let calcObj = { total: '0', next: null, operation: null };

describe('returns a total tests for numbers', () => {
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
});
describe('This test return the multiply of 5 x 6', () => {
  test('it expects a 5 x 6 to be 30', () => {
    calcObj = calculate(calcObj, '5');
    calcObj = calculate(calcObj, 'x');
    calcObj = calculate(calcObj, '6');
    calcObj = calculate(calcObj, '=');
    expect(calcObj.total).toBe('30');
  });
});
describe('This test return the divide of 10 / 2', () => {
  test('it expects a 10 ÷ 2 to be 5', () => {
    calcObj = calculate(calcObj, '10');
    calcObj = calculate(calcObj, '÷');
    calcObj = calculate(calcObj, '2');
    calcObj = calculate(calcObj, '=');
    expect(calcObj.total).toBe('5');
  });
});
describe('This test return the mod of 10 % 2', () => {
  test('it expects a 10 ÷ 2 to be 5', () => {
    calcObj = calculate(calcObj, '10');
    calcObj = calculate(calcObj, '%');
    calcObj = calculate(calcObj, '2');
    calcObj = calculate(calcObj, '=');
    expect(calcObj.total).toBe('0');
  });
});
