import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme.ts";
import { LanguageProvider } from "./contexts/LanguageContext/LanguageContext.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <CssBaseline />
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
);
