import operate from './operate';

test('it expects that 10 + 5 to be 15', () => {
  const result = operate('10', '5', '+');
  expect(result).toBe('15');
});
