import theme from '@Styles/theme';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import CustomCheckInput from '.';

configure({
  adapter: new Adapter(),
});

let exampleNumber = 1;
const EXAMPLE_CHECKED = false;
const EXAMPLE_LABEL = 'test-label';
const EXAMPLE_ONCHANGE = () => {
  exampleNumber--;
};
const EXAMPLE_ERRORS = 'test-errors';

describe('CustomCheckInput component testing', () => {
  describe('Unit', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <CustomCheckInput
          checked={EXAMPLE_CHECKED}
          label={EXAMPLE_LABEL}
          onChange={EXAMPLE_ONCHANGE}
          errors={EXAMPLE_ERRORS}
        />
      </ThemeProvider>,
    );
    describe('Component props', () => {
      it('Component props values', () => {
        const wrapperProps = wrapper.find(CustomCheckInput).props();

        expect(wrapperProps.checked).toEqual(EXAMPLE_CHECKED);
        expect(wrapperProps.label).toEqual(EXAMPLE_LABEL);
        expect(wrapperProps.errors).toEqual(EXAMPLE_ERRORS);

        wrapper.find('input').simulate('change');
        expect(exampleNumber).toEqual(0);
      });
    });
  });
});
