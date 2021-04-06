import { Check } from '@material-ui/icons';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import TextWithIcon from '.';

configure({
  adapter: new Adapter(),
});

const EXAMPLE_TEXT = 'test-text';
const EXAMPLE_ICON = Check;

describe('TextWithIcon component testing', () => {
  describe('Unit', () => {
    const wrapper = mount(
      <TextWithIcon text={EXAMPLE_TEXT} icon={EXAMPLE_ICON} />,
    );
    describe('Component props', () => {
      it('Component props values', () => {
        const wrapperProps = wrapper.find(TextWithIcon).props();

        expect(wrapperProps.text).toBe(EXAMPLE_TEXT);
        expect(wrapperProps.icon).toBe(EXAMPLE_ICON);
      });
    });
  });
});
