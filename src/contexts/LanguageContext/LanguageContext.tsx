import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type Language = "pt-BR" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const DEFAULT_LANGUAGE: Language = "pt-BR";

const translations: Record<Language, Record<string, string>> = {
  "pt-BR": {
    "nav.about": "Sobre",
    "nav.skills": "Skills",
    "nav.projects": "Projetos",
    "hero.role": "Sou Engenheiro de Software",
    "hero.downloadCv": "Download CV",
    "hero.contactMe": "Entre em contato",
    "about.title": "Sobre mim",
    "about.experience": "Experiencia",
    "about.year": "1 ano",
    "about.fullstack": "Desenvolvimento Full Stack",
    "about.education": "Formacao",
    "about.degree": "Bacharelado",
    "about.course": "Ciencia da Computacao",
    "about.description":
      "Engenheiro de software com experiencia em desenvolvimento backend e frontend, integracao de sistemas e automacao com Python. Trabalhei com C# .NET e Angular em projetos reais, desenvolvendo funcionalidades, corrigindo bugs e melhorando sistemas existentes. Tambem criei scripts de automacao para processar dados e integrar sistemas por XML e FTP. Atualmente busco oportunidades para continuar crescendo como engenheiro de software e contribuir com projetos praticos e de impacto.",
    "about.skills": "Skills",
    "projects.title": "Projetos",
    "projects.maze.description":
      "Um jogo de labirinto no qual um algoritmo procedural cria um layout diferente a cada partida. O jogador se move pelo teclado e precisa chegar ate a bandeira para vencer.",
    "projects.maze.tech": "Tecnologias: JavaScript, HTML, CSS",
    "project.viewProject": "Ver projeto",
    "project.viewCode": "Ver codigo",
    "footer.rights": "Todos os direitos reservados",
    "mail.hero.subject": "Contato pelo portfolio",
    "mail.hero.body": "Ola! Acabei de ver seu portfolio...",
    "mail.footer.subject": "Contato pelo seu portfolio",
    "mail.footer.body": "Oi Enzo,",
  },
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "hero.role": "I'm a Software Engineer",
    "hero.downloadCv": "Download CV",
    "hero.contactMe": "Contact Me",
    "about.title": "About me",
    "about.experience": "Experience",
    "about.year": "1 year",
    "about.fullstack": "Full Stack Development",
    "about.education": "Education",
    "about.degree": "Bachelor's Degree",
    "about.course": "Computer Science",
    "about.description":
      "Software Engineer with experience in backend and frontend development, systems integration and Python automation. I have worked with C# .NET and Angular in real-world projects, developing features, fixing bugs and improving existing systems. I also created automation scripts to process data and integrate systems through XML and FTP. I am currently seeking opportunities to continue growing as a software engineer and to contribute to practical and impactful projects.",
    "about.skills": "Skills",
    "projects.title": "Projects",
    "projects.maze.description":
      "A maze escape game in which a procedural algorithm creates a different layout on every launch. The player moves using the keyboard and must navigate the maze to reach the flag and complete the game.",
    "projects.maze.tech": "Technologies: JavaScript, HTML, CSS",
    "project.viewProject": "View project",
    "project.viewCode": "View code",
    "footer.rights": "All rights reserved",
    "mail.hero.subject": "Contact from portfolio",
    "mail.hero.body": "Hello! I just saw your portfolio...",
    "mail.footer.subject": "Contact from your portfolio",
    "mail.footer.body": "Hi Enzo,",
  },
};

const LanguageContext = createContext<LanguageContextType | null>(null);

const getInitialLanguage = (): Language => {
  const saved = localStorage.getItem("language");
  if (saved === "pt-BR" || saved === "en") return saved;

  return navigator.language.toLowerCase().startsWith("pt") ? "pt-BR" : DEFAULT_LANGUAGE;
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    if (lang === language) return;
    localStorage.setItem("language", lang);
    setLanguageState(lang);
    window.location.reload();
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (key: string): string => translations[language][key] ?? translations.en[key] ?? key,
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
