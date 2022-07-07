import renderer from 'react-test-renderer';
import Quotes from '../Quotes';

test('it returns a calculator component', () => {
  const tree = renderer.create(<Quotes />).toJSON();
  expect(tree).toMatchSnapshot();
});
