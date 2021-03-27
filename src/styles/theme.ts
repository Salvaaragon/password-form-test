import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF0049',
    },
    secondary: {
      main: '#002B45',
    },

    background: {
      default: '#FFF1E5',
    },
    text: {
      primary: '#545252',
      secondary: '#BFBDBD',
    },
  },
});

export default theme;
