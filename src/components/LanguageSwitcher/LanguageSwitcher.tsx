import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useLanguage, type Language } from "../../contexts/LanguageContext/useLanguage";

const LANGUAGES: { code: Language; label: string }[] = [
  { code: "pt-BR", label: "PT-BR" },
  { code: "en", label: "EN" },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <ToggleButtonGroup
      exclusive
      size="small"
      value={language}
      aria-label="language switcher"
      onChange={(_, value: Language | null) => {
        if (value) setLanguage(value);
      }}
      sx={{
        backgroundColor: "rgba(251, 244, 230, 0.4)",
        borderRadius: "3px",
        ".MuiToggleButton-root": {
          color: "primary.main",
          borderColor: "rgba(47,52,56,0.22)",
          px: 1.2,
          fontSize: "0.75rem",
          fontWeight: 700,
          fontFamily: "\"Segoe Print\", \"Bradley Hand\", \"Comic Sans MS\", cursive",
          textTransform: "none",
        },
        ".Mui-selected": {
          color: "secondary.main !important",
          backgroundColor: "rgba(200,92,74,0.08) !important",
        },
        ".MuiToggleButton-root:hover": {
          backgroundColor: "rgba(200,92,74,0.08)",
        },
      }}
    >
      {LANGUAGES.map(({ code, label }) => (
        <ToggleButton key={code} value={code} aria-label={`Switch to ${label}`}>
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
