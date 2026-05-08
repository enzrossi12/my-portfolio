import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#2f3438",
      contrastText: "#fbf4e6",
    },
    secondary: {
      main: "#c85c4a",
    },
    background: {
      default: "#c7b89d",
      paper: "#fbf4e6",
    },
    text: {
      primary: "#2f3438",
      secondary: "#62615c",
    },
  },
  typography: {
    fontFamily: "\"Segoe Print\", \"Bradley Hand\", \"Comic Sans MS\", cursive",
    fontSize: 15,
    h1: {
      fontWeight: 700,
      letterSpacing: 0,
    },
    h2: {
      fontWeight: 700,
      letterSpacing: 0,
    },
    h3: {
      fontWeight: 700,
      letterSpacing: 0,
    },
    body1: {
      lineHeight: 1.8,
    },
    button: {
      textTransform: "none", 
      fontWeight: 700,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "radial-gradient(circle at 18% 12%, rgba(255,255,255,0.22), transparent 26%), linear-gradient(135deg, #b8aa90 0%, #d2c3a7 100%)",
          color: "#2f3438",
        },
        "::selection": {
          backgroundColor: "rgba(200, 92, 74, 0.24)",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
