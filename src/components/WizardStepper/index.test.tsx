import theme from '@Styles/theme';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import WizardStepper from '.';

configure({
  adapter: new Adapter(),
});

const EXAMPLE_ACTIVE_STEP = 2;
const EXAMPLE_STEPS = [1, 2, 3, 4, 5, 6, 7, 8];

describe('WizardStepper component testing', () => {
  describe('Unit', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <WizardStepper activeStep={EXAMPLE_ACTIVE_STEP} steps={EXAMPLE_STEPS} />
      </ThemeProvider>,
    );
    describe('Component props', () => {
      it('Component props values', () => {
        const wrapperProps = wrapper.find(WizardStepper).props();

        expect(wrapperProps.activeStep).toBe(EXAMPLE_ACTIVE_STEP);
        expect(wrapperProps.steps).toBe(EXAMPLE_STEPS);
      });
    });
  });
});
