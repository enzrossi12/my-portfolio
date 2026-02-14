import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#0B1120",
    },
    secondary: {
      main: "#2563EB",
    },
  },
  typography: {
    fontFamily: "Helvetica Neue",
    fontSize: 14,
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none", 
      fontWeight: 500,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
