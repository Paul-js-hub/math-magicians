import { render, screen, fireEvent} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

test('it returns a calculator component', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('it expects a particular button to be clicked', () => {
  const handleClick = jest.fn();
  render(<button onClick={handleClick}>x</button>)
  fireEvent.click(screen.getByRole('button', { name: /x/i }));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
