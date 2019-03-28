import React from 'react';
import { shallow } from 'enzyme';
import Congrats from './';
import { findByTestAttribute, checkProps } from '../../../__test__/utils';

function createShallowWrapper(props = {}, state = null) {
  const defaultProps = { success: false };
  const mergedProps = { ...defaultProps, ...props };
  const wrapper = shallow(<Congrats {...mergedProps} />);
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

it('should render non-empty congrats message when `success` prop is true', () => {
  const wrapper = createShallowWrapper({ success: true });
  const congratsMessage = findByTestAttribute(wrapper, 'congrats-message');
  expect(congratsMessage.text().length).not.toBe(0);
});

it('shouldn\'t throw warning message with expected props', () => {
  const expectedProps = { success: false };
  const propsErros = checkProps(Congrats, expectedProps);
  expect(propsErros).toBeUndefined();
});