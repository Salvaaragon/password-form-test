import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    terciary: {
      main: React.CSSProperties['color'];
      light: React.CSSProperties['color'];
      dark: React.CSSProperties['color'];
    };
  }
  interface PaletteOptions {
    terciary: {
      main: React.CSSProperties['color'];
      light: React.CSSProperties['color'];
      dark: React.CSSProperties['color'];
    };
  }
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF0049',
    },
    secondary: {
      dark: '#002B45',
      main: '#0F3950',
      light: '#768c99',
    },
    terciary: {
      main: '#CCD5DA',
      light: '#E3E9E9',
      dark: '#BCC4C9',
    },
    background: {
      default: '#F5F5F5',
    },
  },
});

export default theme;
