import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import CustomText from '.';

configure({
  adapter: new Adapter(),
});

const EXAMPLE_TEXT = 'testing-text';

describe('CustomText component testing', () => {
  describe('Unit', () => {
    const wrapper = mount(<CustomText text={EXAMPLE_TEXT} />);
    describe('Component props', () => {
      it('Component props values', () => {
        const wrapperProps = wrapper.find(CustomText).props();

        expect(wrapperProps.alignment).toEqual('right');
        expect(wrapperProps.color).toEqual('primary');
        expect(wrapperProps.fontFamily).toEqual('Raleway');
        expect(wrapperProps.fontSize).toEqual('1rem');
        expect(wrapperProps.fontStyle).toEqual('normal');
        expect(wrapperProps.fontWeight).toEqual('normal');
        expect(wrapperProps.letterSpacing).toEqual('0');
        expect(wrapperProps.lineHeight).toEqual('1.5rem');
        expect(wrapperProps.text).toEqual(EXAMPLE_TEXT);
      });
    });
  });
});
