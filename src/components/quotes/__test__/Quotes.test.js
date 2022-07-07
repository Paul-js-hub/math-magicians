import { render, screen, fireEvent} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quotes from '../Quotes.js';

test('it returns a calculator component', () => {
  const tree = renderer.create(<Quotes />).toJSON();
  expect(tree).toMatchSnapshot();
});