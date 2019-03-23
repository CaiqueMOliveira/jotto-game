import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Congrats from './';
import { findByTestAttribute } from '../../../__test__/utils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

function createShallowWrapper(props = {}, state = null) {
  const wrapper = shallow(<Congrats {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
}

it('should render without error', () => {
  const wrapper = createShallowWrapper();
  const congratsComponent = findByTestAttribute(wrapper, 'component-congrats');
  expect(congratsComponent.length).toBe(1);
});

it('should render no text when `success` prop is false', () => {
  const wrapper = createShallowWrapper({ success: false });
  const congratsComponent = findByTestAttribute(wrapper, 'component-congrats');
  expect(congratsComponent.text()).toBe('');
});

it('should render non-empty congrats messahe when `success` prop is true', () => {

});