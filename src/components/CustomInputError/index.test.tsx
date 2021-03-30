import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import CustomInput from '.';

configure({
  adapter: new Adapter(),
});

const EXAMPLE_ERRORS = 'test-errors';

describe('CustomInput component testing', () => {
  describe('Unit', () => {
    const wrapper = mount(<CustomInput errors={EXAMPLE_ERRORS} />);
    describe('Component props', () => {
      it('Component props values', () => {
        const wrapperProps = wrapper.find(CustomInput).props();
        expect(wrapperProps.errors).toEqual(EXAMPLE_ERRORS);
      });
    });
  });
});
