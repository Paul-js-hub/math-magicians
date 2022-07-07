import Home from '../Home.js';
import renderer from 'react-test-renderer';

test('it returns a calculator component', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});