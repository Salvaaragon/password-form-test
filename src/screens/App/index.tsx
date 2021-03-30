import { MuiThemeProvider } from '@material-ui/core';
import Router from '@Router';
import i18n from '@Services/i18n';
import theme from '@Styles/theme';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import configureStore from '@Store/configStore';

const App: React.FC = () => {
  const { store } = configureStore();

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </ThemeProvider>
        </MuiThemeProvider>
      </I18nextProvider>
    </Provider>
  );
};

export default App;
