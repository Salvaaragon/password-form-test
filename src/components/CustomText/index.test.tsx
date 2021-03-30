import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import CustomText from '.';

configure({
  adapter: new Adapter(),
});

const EXAMPLE_ALIGNMENT = 'center';
const EXAMPLE_COLOR = '#AAA';
const EXAMPLE_FONT_FAMILY = 'Roboto';
const EXAMPLE_FONTSIZE = '20rem';
const EXAMPLE_FONT_STYLE = 'normal';
const EXAMPLE_FONT_WEIGHT = 'bold';
const EXAMPLE_LETTER_SPACING = '10px';
const EXAMPLE_LINE_HEIGHT = '3rem';
const EXAMPLE_TEXT = 'testing-text';

describe('CustomText component testing', () => {
  describe('Unit', () => {
    const wrapper = mount(
      <CustomText
        alignment={EXAMPLE_ALIGNMENT}
        color={EXAMPLE_COLOR}
        fontFamily={EXAMPLE_FONT_FAMILY}
        fontSize={EXAMPLE_FONTSIZE}
        fontStyle={EXAMPLE_FONT_STYLE}
        fontWeight={EXAMPLE_FONT_WEIGHT}
        letterSpacing={EXAMPLE_LETTER_SPACING}
        lineHeight={EXAMPLE_LINE_HEIGHT}
        text={EXAMPLE_TEXT}
      />,
    );
    describe('Component props', () => {
      it('Component props values', () => {
        const wrapperProps = wrapper.find(CustomText).props();

        expect(wrapperProps.alignment).toEqual(EXAMPLE_ALIGNMENT);
        expect(wrapperProps.color).toEqual(EXAMPLE_COLOR);
        expect(wrapperProps.fontFamily).toEqual(EXAMPLE_FONT_FAMILY);
        expect(wrapperProps.fontSize).toEqual(EXAMPLE_FONTSIZE);
        expect(wrapperProps.fontStyle).toEqual(EXAMPLE_FONT_STYLE);
        expect(wrapperProps.fontWeight).toEqual(EXAMPLE_FONT_WEIGHT);
        expect(wrapperProps.letterSpacing).toEqual(EXAMPLE_LETTER_SPACING);
        expect(wrapperProps.lineHeight).toEqual(EXAMPLE_LINE_HEIGHT);
        expect(wrapperProps.text).toEqual(EXAMPLE_TEXT);
      });
    });
  });
});
