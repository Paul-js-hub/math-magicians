import operate from './operate';

test('it expects that 10 + 5 to be 15', () => {
  const result = operate('10', '5', '+');
  expect(result).toBe('15');
});
test('it expects that 10 - 5 to be 5', () => {
  const result = operate('10', '5', '-');
  expect(result).toBe('5');
});
test('it expects that 10 x 5 to be 50', () => {
  const result = operate('10', '5', 'x');
  expect(result).toBe('50');
});
test('it expects that 10 ÷ 5 to be 2', () => {
  const result = operate('10', '5', '÷');
  expect(result).toBe('2');
});
test('it expects that 10 % 5 to be 0', () => {
  const result = operate('10', '5', '%');
  expect(result).toBe('0');
});
