import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import CustomLink from '.';

configure({
  adapter: new Adapter(),
});

let exampleString = 'test-link';
const EXAMPLE_TEXT = 'link';
const EXAMPLE_CLICK = () => {
  exampleString = exampleString + '-clicked';
};

describe('CustomLink component testing', () => {
  describe('Unit', () => {
    const wrapper = mount(
      <CustomLink onClick={EXAMPLE_CLICK} text={EXAMPLE_TEXT} />,
    );
    describe('Component props', () => {
      it('Component props values', () => {
        const wrapperProps = wrapper.find(CustomLink).props();

        expect(wrapperProps.text).toEqual(EXAMPLE_TEXT);

        wrapper.simulate('click');
        expect(exampleString).toEqual('test-link-clicked');
      });
    });
  });
});
