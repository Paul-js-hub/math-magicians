import renderer from 'react-test-renderer';
import Home from '../Home';

test('it returns a calculator component', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
