import { WorkOutlineTwoTone } from '@material-ui/icons';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import CustomButton from '.';

configure({
  adapter: new Adapter(),
});

let exampleNumber = 1;
const EXAMPLE_ICON = WorkOutlineTwoTone;
const EXAMPLE_BACKGROUND_COLOR = '#FFF';
const EXAMPLE_TEXT = 'testing-button';
const EXAMPLE_TEXT_COLOR = '#000';
const EXAMPLE_ONCLICK = () => {
  exampleNumber++;
};

describe('CustomButton component testing', () => {
  describe('Unit', () => {
    const wrapper = mount(
      <CustomButton
        backgroundcolor={EXAMPLE_BACKGROUND_COLOR}
        disabled={false}
        icon={EXAMPLE_ICON}
        onClick={EXAMPLE_ONCLICK}
        text={EXAMPLE_TEXT}
        textcolor={EXAMPLE_TEXT_COLOR}
      />,
    );
    describe('Component props', () => {
      it('Component props values', () => {
        const wrapperProps = wrapper.find(CustomButton).props();

        expect(wrapperProps.backgroundcolor).toEqual(EXAMPLE_BACKGROUND_COLOR);
        expect(wrapperProps.text).toEqual(EXAMPLE_TEXT);
        expect(wrapperProps.textcolor).toEqual(EXAMPLE_TEXT_COLOR);

        wrapper.simulate('click');
        expect(exampleNumber).toEqual(2);
      });
    });
  });
});
