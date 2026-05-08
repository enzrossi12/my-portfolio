import { useCallback, useMemo, useState, type ReactNode } from "react";
import {
  DEFAULT_LANGUAGE,
  LanguageContext,
  translations,
  type Language,
} from "./languageContextCore";

const getInitialLanguage = (): Language => {
  const saved = localStorage.getItem("language");
  if (saved === "pt-BR" || saved === "en") return saved;

  return DEFAULT_LANGUAGE;
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = useCallback(
    (lang: Language) => {
      if (lang === language) return;
      localStorage.setItem("language", lang);
      setLanguageState(lang);
      window.location.reload();
    },
    [language],
  );

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (key: string): string => translations[language][key] ?? translations.en[key] ?? key,
    }),
    [language, setLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
