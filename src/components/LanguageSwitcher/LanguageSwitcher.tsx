import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useLanguage, type Language } from "../../contexts/LanguageContext/LanguageContext";

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
        backgroundColor: "rgba(255,255,255,0.08)",
        borderRadius: "10px",
        ".MuiToggleButton-root": {
          color: "#fff",
          borderColor: "rgba(255,255,255,0.18)",
          px: 1.2,
          fontSize: "0.75rem",
          fontWeight: 700,
          textTransform: "none",
        },
        ".Mui-selected": {
          color: "#fff !important",
          backgroundColor: "rgba(255,255,255,0.12) !important",
          boxShadow:
            "inset 0 1px 1px rgba(255,255,255,0.25), inset 0 -1px 2px rgba(0,0,0,0.35), 0 2px 6px rgba(0,0,0,0.25)",
          transform: "translateY(1px)",
        },
        ".MuiToggleButton-root:hover": {
          backgroundColor: "rgba(255,255,255,0.14)",
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
