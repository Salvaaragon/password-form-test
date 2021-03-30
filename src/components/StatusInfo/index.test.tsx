import { ArrowBack, ArrowLeft } from '@material-ui/icons';
import theme from '@Styles/theme';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import StatusInfo from '.';

configure({
  adapter: new Adapter(),
});

let exampleNumber = 1;
const EXAMPLE_DESCRIPTION_SUCCESS = 'test-description-success';
const EXAMPLE_ICON_SUCCESS = ArrowBack;
const EXAMPLE_ON_CLICK_LINK_SUCCESS = () => {
  exampleNumber += 5;
};
const EXAMPLE_TEXT_LINK_SUCCESS = 'test-text-link-success';
const EXAMPLE_TITLE_SUCCESS = 'test-title-success';
const EXAMPLE_TYPE_SUCCESS = 'success';

const EXAMPLE_DESCRIPTION_ERROR = 'test-description-error';
const EXAMPLE_ICON_ERROR = ArrowLeft;
const EXAMPLE_ON_CLICK_LINK_ERROR = () => {
  exampleNumber -= 7;
};
const EXAMPLE_TEXT_LINK_ERROR = 'test-text-link-error';
const EXAMPLE_TITLE_ERROR = 'test-title-error';
const EXAMPLE_TYPE_ERROR = 'error';

describe('StatusInfo component testing', () => {
  describe('Unit', () => {
    const wrapperSuccess = mount(
      <ThemeProvider theme={theme}>
        <StatusInfo
          description={EXAMPLE_DESCRIPTION_SUCCESS}
          icon={EXAMPLE_ICON_SUCCESS}
          onClickLink={EXAMPLE_ON_CLICK_LINK_SUCCESS}
          textLink={EXAMPLE_TEXT_LINK_SUCCESS}
          title={EXAMPLE_TITLE_SUCCESS}
          type={EXAMPLE_TYPE_SUCCESS}
        />
      </ThemeProvider>,
    );

    const wrapperError = mount(
      <ThemeProvider theme={theme}>
        <StatusInfo
          description={EXAMPLE_DESCRIPTION_ERROR}
          icon={EXAMPLE_ICON_ERROR}
          onClickLink={EXAMPLE_ON_CLICK_LINK_ERROR}
          textLink={EXAMPLE_TEXT_LINK_ERROR}
          title={EXAMPLE_TITLE_ERROR}
          type={EXAMPLE_TYPE_ERROR}
        />
      </ThemeProvider>,
    );
    describe('Component success props', () => {
      it('Component props values', () => {
        const wrapperProps = wrapperSuccess.find(StatusInfo).props();

        expect(wrapperProps.description).toBe(EXAMPLE_DESCRIPTION_SUCCESS);
        expect(wrapperProps.icon).toBe(EXAMPLE_ICON_SUCCESS);
        expect(wrapperProps.textLink).toBe(EXAMPLE_TEXT_LINK_SUCCESS);
        expect(wrapperProps.title).toBe(EXAMPLE_TITLE_SUCCESS);
        expect(wrapperProps.type).toBe(EXAMPLE_TYPE_SUCCESS);

        wrapperSuccess.find('a').simulate('click');
        expect(exampleNumber).toEqual(6);
      });
    });
    describe('Component Error props', () => {
      it('Component props values', () => {
        const wrapperProps = wrapperError.find(StatusInfo).props();

        expect(wrapperProps.description).toBe(EXAMPLE_DESCRIPTION_ERROR);
        expect(wrapperProps.icon).toBe(EXAMPLE_ICON_ERROR);
        expect(wrapperProps.textLink).toBe(EXAMPLE_TEXT_LINK_ERROR);
        expect(wrapperProps.title).toBe(EXAMPLE_TITLE_ERROR);
        expect(wrapperProps.type).toBe(EXAMPLE_TYPE_ERROR);

        wrapperError.find('a').simulate('click');
        expect(exampleNumber).toEqual(-1);
      });
    });
  });
});
