import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import IconButton from '.';

configure({
  adapter: new Adapter(),
});

let exampleNumber = 1;
const EXAMPLE_ARIA_LABEL = 'testing-aria-label';
const EXAMPLE_DISABLED = false;
const EXAMPLE_ICON_ALT = 'testing-icon-alt';
const EXAMPLE_ICON_SRC = 'testing-icon-src';
const EXAMPLE_ICON_WIDTH = 'testing-icon-width';
const EXAMPLE_ONCLICK = () => {
  exampleNumber++;
};

describe('IconButton component testing', () => {
  describe('Unit', () => {
    const wrapper = mount(
      <IconButton
        ariaLabel={EXAMPLE_ARIA_LABEL}
        disabled={EXAMPLE_DISABLED}
        iconAlt={EXAMPLE_ICON_ALT}
        iconSrc={EXAMPLE_ICON_SRC}
        iconWidth={EXAMPLE_ICON_WIDTH}
        onClick={EXAMPLE_ONCLICK}
      />,
    );
    describe('Component props', () => {
      it('Component props values', () => {
        const wrapperProps = wrapper.find(IconButton).props();

        expect(wrapperProps.ariaLabel).toEqual(EXAMPLE_ARIA_LABEL);
        expect(wrapperProps.disabled).toEqual(EXAMPLE_DISABLED);
        expect(wrapperProps.iconAlt).toEqual(EXAMPLE_ICON_ALT);
        expect(wrapperProps.iconSrc).toEqual(EXAMPLE_ICON_SRC);
        expect(wrapperProps.iconWidth).toEqual(EXAMPLE_ICON_WIDTH);

        wrapper.simulate('click');
        expect(exampleNumber).toEqual(2);
      });
    });
  });
});
