import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Congrats from './';
import { findByTestAttribute } from '../../../__test__/utils';

Enzyme.configure({ adpater: new EnzymeAdapter() });

function createShallowWrapper(props = {}, state = null) {
  const wrapper = shallow(<Congrats {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
}

it('should render without error', () => {

});

it('should render no text when `success` prop is false', () => {

});

it('should render non-empty congrats messahe when `success` prop is true', () => {

});