import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#0F172A',
    },
    secondary: {
      main: '#1E293B',

    },
  },
  typography: {
        fontFamily: "Segeo UI"
  }
});

theme = responsiveFontSizes(theme);

export default theme;