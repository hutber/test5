import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Menu from './index';

it('Splash page is rendered', () => {
	const result = shallow(
		<Menu />,
	);

	expect(shallowToJson(result)).toMatchSnapshot();
});
