import { Person } from '@material-ui/icons';
import theme from '@Styles/theme';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import CustomInput from '.';

configure({
  adapter: new Adapter(),
});

let exampleNumber = 10;
const EXAMPLE_ERRORS = 'test-errors';
const EXAMPLE_ICON = Person;
const EXAMPLE_LABEL = 'test-label';
const EXAMPLE_ONCHANGE = () => {
  exampleNumber *= 10;
};
const EXAMPLE_PLACEHOLDER = 'test-placeholder';
const EXAMPLE_VALUE = 'test-value';

describe('CustomInput component testing', () => {
  describe('Unit', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <CustomInput
          errors={EXAMPLE_ERRORS}
          icon={EXAMPLE_ICON}
          label={EXAMPLE_LABEL}
          onChange={EXAMPLE_ONCHANGE}
          placeholder={EXAMPLE_PLACEHOLDER}
          value={EXAMPLE_VALUE}
        />
      </ThemeProvider>,
    );
    describe('Component props', () => {
      it('Component props values', () => {
        const wrapperProps = wrapper.find(CustomInput).props();
        expect(wrapperProps.errors).toEqual(EXAMPLE_ERRORS);
        expect(wrapperProps.label).toEqual(EXAMPLE_LABEL);
        expect(wrapperProps.placeholder).toEqual(EXAMPLE_PLACEHOLDER);
        expect(wrapperProps.value).toEqual(EXAMPLE_VALUE);

        wrapper.find('input').simulate('change');
        expect(exampleNumber).toEqual(100);
      });
    });
  });
});
